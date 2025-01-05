"use client";

import uiImage from "../images/UI.png";

export default function Hero() {
  return (
    <section className="relative bg-[#151312] text-white min-h-screen flex items-center">
      {/* Background Text */}
      <div
        className="absolute inset-0 text-center text-[20vw] font-bold text-gray-200/20 select-none pointer-events-none flex items-center justify-center leading-none tracking-tight z-0"
      >
        ONKAR GORE
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Advanced UI/UX designer.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-6 leading-relaxed">
              Experience with React JS, HTML,<br />CSS, JavaScript.
            </p>
            <a
              href="/contact"
              className="inline-flex text-lg px-6 py-3 bg-white text-black font-medium rounded-2xl hover:bg-gray-400 transition duration-300"
            >
              Contact me
            </a>
          </div>

          {/* Image */}
          <img src={uiImage} alt="UI design illustration" />
        </div>
      </div>
    </section>
  );
}
