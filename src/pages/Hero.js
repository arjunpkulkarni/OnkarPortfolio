"use client";

import uiImage from "../images/UI.png";

export default function Hero() {
  return (
    <section className="relative bg-[#151312] text-white min-h-screen flex items-center justify-center">
      {/* Background Text */}
      <div
        className="absolute inset-0 text-center text-[20vw] font-bold text-gray-200/20 select-none pointer-events-none flex items-center justify-center leading-none tracking-tight z-0"
      >
        ONKAR GORE
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-38 relative z-10">
        <div className="grid lg:grid-cols-2 items-center mr-28 ml-48">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-7xl lg:text-5xl font-bold mb-4 leading-snug">
              Advanced UI/UX
              <br />
              designer.
            </h1>
            <p className="text-lg lg:text-xl text-gray-450 font-light mb-4 leading-normal">
              Experience with React JS, HTML,<br />CSS, JavaScript.
            </p>
            <a
              href="/contact"
              className="inline-flex text-base px-5 py-2 bg-white text-black font-medium rounded-xl hover:bg-gray-400 transition duration-300"
            >
              Contact me
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img src={uiImage} alt="UI design illustration" className="w-[90%] lg:w-[80%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
