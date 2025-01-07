"use client";

import profileImage from "../images/ONKAR.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#151312] text-white overflow-hidden px-4 lg:px-8">
      {/* Background Text */}
      <div className="relative z-10 max-w-screen-xl mx-auto pt-20 lg:pt-32 grid lg:grid-cols-2 gap-12 items-center transform scale-60 origin-center"> {/* Apply scale-60 to reduce by 40% */}
        {/* Left Column - Text Content */}
        <div className="space-y-6 pl-12 lg:pl-24">
          <div className="flex items-center gap-6 mb-8">
            <div>
              <h2 className="text-4xl font-bold">Onkar Gore</h2>
              <p className="text-gray-400">Finance B.S @ SUNY Oswego</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-semibold leading-tight">
            I'm a 20-year-old UI/UX Designer based in New York.
          </h1>
          <p className="text-xl text-gray-300">
            Discover my work, experiences, and achievements here!
          </p>
          <div className="flex gap-4">
            <button 
              className="px-5 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact me
            </button>
            <div className="flex items-center gap-3">
              {/* Instagram Icon */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity text-gray-300"
              >
                <FaInstagram size={30} />
              </a>
              {/* LinkedIn Icon */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity text-gray-300"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="relative flex justify-center items-center">
          <img 
            src={profileImage}
            alt="Profile"
            className="w-[80%] h-[80%] rounded-full border-4 border-white/10" />
        </div>
      </div>

      {/* Scale the entire section to make it 40% smaller */}
      <div className="absolute inset-0 transform scale-60 origin-center"></div> {/* Apply scale transformation */}
    </div>
  );
}
