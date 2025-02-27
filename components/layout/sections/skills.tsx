"use client";

interface SkillProps {
  icon: string;
  name: string;
}

const skills: SkillProps[] = [
  { icon: "💻", name: "Python" },
  { icon: "🌐", name: "Flask" },
  { icon: "💻", name: "JavaScript" },
  { icon: "💻", name: "TypeScript" },
  { icon: "⚛️", name: "React" },
  { icon: "🎨", name: "Tailwind CSS" },
  { icon: "🗄️", name: "SQLite" },
  { icon: "🗄️", name: "SQL Alchemy" },
  { icon: "💻", name: "Linux" },
  { icon: "🌿", name: "Git" },
  { icon: "🐙", name: "GitHub" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">Core Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ icon, name }) => (
          <div key={name} className="flex items-center text-xl font-medium">
            <span className="mr-2" style={{ fontSize: '32px' }}>{icon}</span>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};
