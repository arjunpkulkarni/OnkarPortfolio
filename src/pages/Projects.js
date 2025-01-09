"use client";

import Artica from "../images/ARTICA.png";
import BeatPro from "../images/BEATPRO.png";
import FitCheck from "../images/FITCHECK.png";

export default function Projects() {
  const projects = [
    {
      title: "BeatPro",
      description: "SaaS Template Design.",
      image: BeatPro,
    },
    {
      title: "Artica",
      description: "SaaS Template Design.",
      image: Artica,
    },
    {
      title: "FitCheck",
      description: "E-commerce Storefront",
      image: FitCheck,
    },
  ];

  return (
    <section className="min-h-screen bg-[#DFD9E2] text-black">
      <div className="container mx-auto px-4 transform scale-90">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-center pb-6">Recent Projects</h2>

        <div className="flex gap-8">
          {/* LUMELABS Button */}
          <div className="hidden md:flex w-[250px] h-[900px] bg-[#383D3B]/20 rounded-2xl items-center justify-center relative group cursor-pointer">
            <span className="text-9xl font-bold tracking-wider rotate-180 [writing-mode:vertical-lr] text-[#000000]/40">
              LUMELABS
            </span>
          </div>

          {/* Project Grid */}
          <div className="flex-1 flex flex-col gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full h-[278px] p-0 relative group overflow-hidden bg-[#000000]/20 rounded-2xl cursor-pointer"
              >
                <a href={project.link}>
                  <div className="absolute inset-0 p-8 flex items-center">
                    <div className="w-1/2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-[70%] h-[70%] rounded-lg object-cover border-4 border-[#000000]/20 rounded-[16px]"
                      />
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-5xl font-bold mb-2 text-[#000000]/40">
                        {project.title}
                      </h3>
                      <p className="text-2xl text-[#000000]/30">{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
