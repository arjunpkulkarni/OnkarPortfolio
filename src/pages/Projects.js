"use client";

import { ArrowUpRight } from "lucide-react";
import Artica from "../images/ARTICA.png";
import BeatPro from "../images/BEATPRO.png";
import FitCheck from "../images/FITCHECK.png";

export default function Projects() {
  const projects = [
    {
      title: "BeatPro",
      description: "SaaS Template Design.",
      image: BeatPro, // Updated with actual image import
      link: "#",
    },
    {
      title: "Artica",
      description: "SaaS Template Design.",
      image: Artica, // Updated with actual image import
      link: "#",
    },
    {
      title: "FitCheck",
      description: "E-commerce Storefront",
      image: FitCheck, // Updated with actual image import
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-[#151312] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Recent Projects</h2>

        <div className="flex gap-8">
          {/* LUMELABS Button */}
          <div className="hidden md:flex w-[250px] h-[900px] bg-zinc-900 rounded-2xl items-center justify-center relative group cursor-pointer">
            <span className="text-9xl font-bold tracking-wider rotate-180 [writing-mode:vertical-lr]">
              LUMELABS
            </span>
          </div>

          {/* Project Grid */}
          <div className="flex-1 flex flex-col gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full h-[278px] p-0 relative group overflow-hidden bg-zinc-900 rounded-2xl cursor-pointer"
              >
                <a href={project.link}>
                  <div className="absolute inset-0 p-8 flex items-center">
                    <div className="w-1/2">
                      <img
                        src={project.image} // Dynamically use the image for each project
                        alt={project.title}
                        className="w-[70%] h-[70%] rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg text-zinc-400">{project.description}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="absolute top-4 right-4 w-6 h-6 text-zinc-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
