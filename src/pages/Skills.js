"use client";

import FigmaLogo from "../images/Group 20.png"; // Imported Figma logo
import SketchLogo from "../images/image-1.png"; // Imported Sketch logo
import ReactLogo from "../images/image.png"; // Imported React logo

export default function SkillsSection() {
  const skills = [
    {
      name: "Figma",
      logo: FigmaLogo, // Use imported Figma logo
    },
    {
      name: "Sketch 3",
      logo: SketchLogo, // Use imported Sketch logo
    },
    {
      name: "React",
      logo: ReactLogo, // Use imported React logo
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#151312] flex items-center justify-center overflow-hidden py-14">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none select-none">
        <h2 className="text-[12vw] font-bold text-gray-200/20 select-none pointer-events-none flex items-center justify-center leading-none tracking-tight z-0">
          Tools &
        </h2>
        <h2 className="text-[12vw] font-bold text-gray-200/20 select-none pointer-events-none flex items-center justify-center leading-none tracking-tight z-0">
          Frameworks
        </h2>
      </div>

      {/* Skill Badges */}
      <div className="relative flex flex-wrap justify-center gap-7 md:gap-9 translate-y-[-10%]">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm px-6 py-3.5 rounded-full hover:scale-105 transition-all"
          >
            <span className="flex items-center justify-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-14 h-14 object-contain" // Adjusted logo size
              />
            </span>
            <span className="text-white text-xl font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
