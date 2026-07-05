"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const NeuralNetwork = dynamic(
  () =>
    import("./NeuralNetwork").then((mod) => ({
      default: mod.NeuralNetwork,
    })),
  { ssr: false }
);

export function HeroScene() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-brass/30 animate-pulse" />
        </div>
      }
    >
      <NeuralNetwork />
    </Suspense>
  );
}
