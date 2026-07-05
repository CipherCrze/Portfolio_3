import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStrip } from "@/components/sections/TechStrip";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Awards } from "@/components/sections/Awards";
import { OrbDivider } from "@/components/sections/OrbDivider";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { HeroScene } from "@/components/three/Scene";
import { SITE_CONFIG } from "@/lib/constants";

function Divider() {
  return <div className="h-px bg-line" />;
}

export default function Home() {
  return (
    <>
      {/* Global persistent 3D WebGL background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <HeroScene />
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arnav Sharma",
            jobTitle: "Data Science & AI/ML Engineer",
            description: SITE_CONFIG.description,
            url: SITE_CONFIG.url,
            sameAs: [
              "https://github.com/CipherCrze",
              "https://github.com/CipherCrze/Synergy-AI-Employer",
              "https://github.com/CipherCrze/SympEase",
              "https://github.com/CipherCrze/MELR",
              "https://github.com/CipherCrze/Boolean-Text-Summarizer",
              "https://ieeexplore.ieee.org/document/11389940",
            ],
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Manipal University Jaipur",
            },
            knowsAbout: [
              "Machine Learning",
              "Natural Language Processing",
              "RAG Systems",
              "GPU Computing",
              "CUDA",
              "Python",
              "TensorFlow",
            ],
          }),
        }}
      />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TechStrip />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Publications />
        <Divider />
        <Awards />
        <OrbDivider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
