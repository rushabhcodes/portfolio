import React from 'react';

const skillsData = {
  "Programming Languages": [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'HTML', icon: '🔤' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'Dart', icon: '🎯' },
    // Add more languages as needed
  ],
  "Frameworks & Technologies": [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🔺' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'Express.js', icon: '🟫' },
    // Add more frameworks and technologies as needed
  ],
  "Tools & Platforms": [
    { name: 'Git', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Vite', icon: '🏎️' },
    // Add more tools and platforms as needed
  ],
};

const Skills = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 text-lg">
                    <div className="text-2xl">{skill.icon}</div>
                    <p className="font-medium">{skill.name}</p>
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
