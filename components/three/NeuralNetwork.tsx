"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Physics settings
const CONNECTION_DISTANCE = 2.4;
const INTERACTION_RADIUS = 3.8;
const RESTORING_STIFFNESS = 0.006;
const MOUSE_ATTRACTION = 0.012;
const DAMPING = 0.86;

interface NodeData {
  position: THREE.Vector3;
  anchor: THREE.Vector3;
  velocity: THREE.Vector3;
  phase: number;
  speed: number;
  type: "brass" | "white" | "ferrari";
}

// Generate nodes distributed vertically to cover the entire scrollable height
function generateNodes(count: number): NodeData[] {
  const nodes: NodeData[] = [];
  for (let i = 0; i < count; i++) {
    // Distribute vertically from +12 down to -38 to span all scrolled sections
    const x = (Math.random() - 0.5) * 22;
    const y = (Math.random() - 0.5) * 50 - 13;
    const z = (Math.random() - 0.5) * 8 - 2;

    const pos = new THREE.Vector3(x, y, z);
    const anchor = pos.clone();

    // Determine color type: 2-3% Ferrari red, 10% white highlights, rest brass/gold
    const rand = Math.random();
    let type: "brass" | "white" | "ferrari" = "brass";
    if (rand < 0.025) {
      type = "ferrari";
    } else if (rand < 0.125) {
      type = "white";
    }

    nodes.push({
      position: pos,
      anchor,
      velocity: new THREE.Vector3(0, 0, 0),
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.4,
      type,
    });
  }
  return nodes;
}

interface ParticleSystemProps {
  count: number;
  isReduced: boolean;
}

function ParticleSystem({ count, isReduced }: ParticleSystemProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { camera } = useThree();

  const nodes = useMemo(() => generateNodes(count), [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  const brassColor = useMemo(() => new THREE.Color("#c9a464"), []);
  const whiteColor = useMemo(() => new THREE.Color("#ede9e1"), []);
  const ferrariColor = useMemo(() => new THREE.Color("#E10600"), []);

  // Pre-populate color buffer
  const colorArray = useMemo(() => {
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const node = nodes[i];
      const color =
        node.type === "ferrari"
          ? ferrariColor
          : node.type === "white"
          ? whiteColor
          : brassColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return colors;
  }, [nodes, count, brassColor, whiteColor, ferrariColor]);

  // Global window mousemove listener (works even when canvas is pointer-events-none)
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    // Smooth inertia camera scrolling
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const scrollHeight =
      typeof document !== "undefined"
        ? document.documentElement.scrollHeight
        : 1000;
    const maxScroll = scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Move camera down Y coordinate as user scrolls (covering -32 units span)
    const targetCameraY = -scrollProgress * 32;
    camera.position.y += (targetCameraY - camera.position.y) * 0.05;

    // Project screen mouse coordinate to 3D world coordinate at Z=0
    const vector = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const mouseWorldPos = camera.position.clone().add(dir.multiplyScalar(distance));

    const linePositions: number[] = [];
    const lineColors: number[] = [];

    const isMobile = count <= 110;

    for (let i = 0; i < count; i++) {
      const node = nodes[i];

      if (!isReduced) {
        // 1. Natural floating sin/cos base movement
        const floatX = Math.sin(time * node.speed + node.phase) * 0.0015;
        const floatY = Math.cos(time * node.speed * 0.8 + node.phase) * 0.0015;
        const floatZ = Math.sin(time * node.speed * 0.5 + node.phase) * 0.001;
        node.position.x += floatX;
        node.position.y += floatY;
        node.position.z += floatZ;

        // 2. Physics-based mouse attraction force
        const distToMouse = node.position.distanceTo(mouseWorldPos);
        let hoverGlow = 0;

        if (distToMouse < INTERACTION_RADIUS) {
          const forceFactor = (1 - distToMouse / INTERACTION_RADIUS) * MOUSE_ATTRACTION;
          const forceDir = new THREE.Vector3()
            .subVectors(mouseWorldPos, node.position)
            .normalize();

          node.velocity.addScaledVector(forceDir, forceFactor);
          // Increase brightness/glow based on proximity to mouse
          hoverGlow = (1 - distToMouse / INTERACTION_RADIUS) * 0.6;
        }

        // 3. Spring restoring force pulling back to original anchor grid
        const restoreDir = new THREE.Vector3().subVectors(node.anchor, node.position);
        node.velocity.addScaledVector(restoreDir, RESTORING_STIFFNESS);

        // 4. Dampen velocity and update position
        node.velocity.multiplyScalar(DAMPING);
        node.position.add(node.velocity);

        // 5. Update instanced mesh transform matrices
        const pulse = 0.5 + 0.5 * Math.sin(time * node.speed + node.phase);
        const baseScale = node.type === "ferrari" ? 0.08 : node.type === "white" ? 0.065 : 0.055;
        const scale = baseScale * (1 + hoverGlow) + pulse * 0.02;

        dummy.position.copy(node.position);
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);

        // Color update based on interaction glow (significantly brighter base visibility)
        const alpha = 0.85 + hoverGlow * 0.15;
        const baseColor =
          node.type === "ferrari"
            ? ferrariColor
            : node.type === "white"
            ? whiteColor
            : brassColor;

        if (hoverGlow > 0) {
          // Glow boost
          tempColor.copy(baseColor).multiplyScalar(alpha + 1.2);
        } else {
          tempColor.copy(baseColor).multiplyScalar(alpha * 2.2);
        }
        colorArray[i * 3] = tempColor.r;
        colorArray[i * 3 + 1] = tempColor.g;
        colorArray[i * 3 + 2] = tempColor.b;
      } else {
        // Reduced motion mode: Static rendering
        dummy.position.copy(node.anchor);
        dummy.scale.setScalar(node.type === "ferrari" ? 0.065 : 0.045);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    const instanceColorAttr = meshRef.current.geometry.getAttribute("instanceColor");
    if (instanceColorAttr) {
      (instanceColorAttr.array as Float32Array).set(colorArray);
      instanceColorAttr.needsUpdate = true;
    }

    // 6. Draw dynamic edge lines (skip or limit on mobile to save performance)
    if (linesRef.current && !isReduced && !isMobile) {
      for (let i = 0; i < count; i++) {
        let connCount = 0;
        for (let j = i + 1; j < count; j++) {
          // Limit connection complexity
          if (connCount > 3) break;

          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < CONNECTION_DISTANCE) {
            connCount++;
            const alpha = 1 - dist / CONNECTION_DISTANCE;

            // Highlight connections near cursor
            const d1 = nodes[i].position.distanceTo(mouseWorldPos);
            const d2 = nodes[j].position.distanceTo(mouseWorldPos);
            const nearMouse = d1 < INTERACTION_RADIUS || d2 < INTERACTION_RADIUS;
            // Significantly increased lineAlpha values
            const lineAlpha = alpha * (nearMouse ? 0.85 : 0.45);

            linePositions.push(
              nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
              nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
            );

            const isAccentLine = nodes[i].type === "ferrari" || nodes[j].type === "ferrari";
            const lc = isAccentLine ? ferrariColor : brassColor;

            lineColors.push(
              lc.r * lineAlpha, lc.g * lineAlpha, lc.b * lineAlpha,
              lc.r * lineAlpha * 0.7, lc.g * lineAlpha * 0.7, lc.b * lineAlpha * 0.7
            );
          }
        }
      }

      const lineGeom = linesRef.current.geometry;
      lineGeom.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      lineGeom.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(lineColors, 3)
      );
      lineGeom.computeBoundingSphere();
    }
  });

  return (
    <group>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, count]}
        frustumCulled={false}
      >
        <sphereGeometry args={[1, 6, 6]}>
          <instancedBufferAttribute
            attach="attributes-instanceColor"
            args={[colorArray, 3]}
          />
        </sphereGeometry>
        <meshBasicMaterial vertexColors toneMapped={false} />
      </instancedMesh>

      {!isReduced && count > 110 && (
        <lineSegments ref={linesRef} frustumCulled={false}>
          <bufferGeometry />
          <lineBasicMaterial vertexColors transparent opacity={1} toneMapped={false} />
        </lineSegments>
      )}
    </group>
  );
}

export function NeuralNetwork() {
  const isReduced = useReducedMotion();

  // Detect mobile screen widths to dynamically scale node count for 60FPS optimization
  const count = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 110 : 255;
    }
    return 255;
  }, []);

  return (
    <div className="w-full h-full relative bg-ink">
      <Canvas
        camera={{ position: [0, 0, 11], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
      >
        <fog attach="fog" args={["#0b0b0f", 20, 32]} />
        <ParticleSystem count={count} isReduced={isReduced} />
      </Canvas>
    </div>
  );
}
