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
      name: "React",
      logo: SketchLogo, // Use imported Sketch logo
    },
    {
      name: "Sketch 3",
      logo: ReactLogo, // Use imported React logo
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#DFD9E2] flex flex-col items-center justify-center overflow-hidden py-16">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 pointer-events-none select-none">
        <h2 className="text-[14.4vw] font-bold text-[#000000]/20 select-none pointer-events-none leading-none tracking-tight z-0">
          Tools &
        </h2>
        <h2 className="text-[14.4vw] font-bold text-[#000000]/20 select-none pointer-events-none leading-none tracking-tight z-0">
          Frameworks
        </h2>
      </div>

      {/* Skill Badges */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 md:gap-11 mt-14">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-4 bg-[#383D3B]/50 backdrop-blur-sm px-6 py-3.5 rounded-full hover:scale-105 transition-all"
          >
            <span className="flex items-center justify-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-14 h-14 object-contain"
              />
            </span>
            <span className="text-white text-[1.2rem] font-medium">{skill.name}</span> {/* Increased text size by 20% */}
          </div>
        ))}
      </div>
    </section>
  );
}
