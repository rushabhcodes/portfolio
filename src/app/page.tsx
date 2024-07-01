import Certifications from "@/components/certifications";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparckles";


export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Background pattern before main content */}
        <div className="absolute inset-0 bg-pattern-before">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={5    }
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        </div>

        {/* Main content */}
        <div className="z-10 relative">
          <Hero/>
          <Skills/>
          <Projects/>
          <Certifications/>
        </div>

        {/* Decorative background after main content */}
        <div className="absolute inset-0 bg-pattern-after blur-saturate"></div>
      </main>
    </>
  );
}
