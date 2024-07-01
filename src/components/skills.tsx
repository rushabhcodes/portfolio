import React from "react";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const skillsData = {
  "Sericvice Platforms": [
    { name: "Firebase", icon: "🔥" },
    { name: "Netlify", icon: "🌐" },
    { name: "Vercel", icon: "🌟" },
    { name: "Heroku", icon: "⛅" },
    { name: "DigitalOcean", icon: "🌊" },
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔷" },
    { name: "Google Cloud", icon: "🌐" },
    // Add more service platforms as needed
  ],
  "Programming Languages": [
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🟦" },
    { name: "HTML", icon: "🔤" },
    { name: "CSS", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "Dart", icon: "🎯" },
    // Add more languages as needed
  ],
  "Frameworks & Technologies": [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "🔺" },
    { name: "Vite", icon: "🏎️" },
    { name: "Flutter", icon: "🦋" },
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🟫" },
    // Add more frameworks and technologies as needed
  ],
  "Database & ORM": [
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "SQLite", icon: "📦" },
    { name: "MongoDB", icon: "🍃" },
    // Add more databases and ORMs as needed
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },

    // Add more tools and platforms as needed
  ],
};

const Skills = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">code:skills</h2>
        <div className="flex flex-col items-center">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="rounded-lg shadow-md p-6">
              {/* <h3 className="text-xl font-semibold mb-4">{category}</h3> */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex  text-center">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                      >
                        <span>
                          {skill.icon}
                          {skill.name}
                        </span>
                      </HoverBorderGradient>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
