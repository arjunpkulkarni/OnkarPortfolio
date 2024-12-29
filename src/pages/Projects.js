"use client";

export default function Projects() {
  const projects = [
    {
      title: "BeatPro",
      description: "SaaS Template Design",
      image: "/beatpro.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "Artica",
      description: "SaaS Template Design",
      image: "/artica.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "FitCheck",
      description: "E-commerce Storefront",
      image: "/fitcheck.jpg", // Replace with your image path
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Recent Projects
        </h2>
        <div className="flex flex-wrap items-center gap-8">
          {/* Sidebar */}
          <div className="flex-shrink-0 bg-gray-800 rounded-lg p-8 text-center w-32">
            <h3 className="text-xl font-bold text-white transform rotate-90 whitespace-nowrap">
              LUMELABS
            </h3>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="flex items-center text-purple-500 hover:text-purple-600 transition duration-300"
                  >
                    View Project 
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
