"use client";

import { FaPython, FaFlask, FaJs, FaReact, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSqlite, SiSqlalchemy } from "react-icons/si";
import CodeTyping from "./code-typing";

interface SkillProps {
  icon: JSX.Element;
  name: string;
}

const skills: SkillProps[] = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaFlask />, name: "Flask" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiSqlite />, name: "SQLite" },
  { icon: <SiSqlalchemy />, name: "SQL Alchemy" },
  { icon: <FaLinux />, name: "Linux" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-[75%] mx-auto pb-24 sm:pb-32 bg-white dark:bg-black text-black dark:text-white p-8 rounded-lg">
      <h2 className="text-lg md:text-xl text-center mb-6 text-orange-400 font-bold">Core Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6">
          {skills.map(({ icon, name }) => (
            <div key={name} className="flex items-center text-xl font-medium">
              <span className="mr-2 text-orange-500" style={{ fontSize: '32px' }}>{icon}</span>
              {name}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <CodeTyping />
        </div>
      </div>
    </section>
  );
};
