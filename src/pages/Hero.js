"use client"

import uiImage from "../images/UI.png";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Advanced UI/UX designer.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed">
              Experience with React JS, HTML,<br />CSS, JavaScript.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition duration-300"
            >
              Contact me
            </a>
          </div>
          
          <img
          src={uiImage}
          alt="image" />
        </div>
      </div>      
    </section>
  )
}

