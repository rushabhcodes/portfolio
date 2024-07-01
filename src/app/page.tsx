import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparckles";
import Image from "next/image";

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
          <div className="flex flex-col items-center justify-between p-6 sm:p-12 lg:p-24">
            <div className="flex flex-col sm:flex-row min-h-screen justify-center items-center gap-14 sm:gap-20 lg:gap-40">
              <div className="flex flex-col justify-center items-start gap-5 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">👋 Hi, I'm Rushabh Patil. </h1>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  A people-first Product Designer with a passion for crafting delightful experiences across screens. With a keen eye for clean design, I am dedicated to creating elegant and visually appealing user experiences that elevate complex workflows.
                </p>
                <Button>Resume</Button>
              </div>
              <div className="border border-gray-500 rounded-lg p-5 w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <Image
                  src={"/rush.jpg"}
                  alt={"Rushabh Patil"}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <Skills/>
          <Projects/>
        </div>

        {/* Decorative background after main content */}
        <div className="absolute inset-0 bg-pattern-after blur-saturate"></div>
      </main>
    </>
  );
}
