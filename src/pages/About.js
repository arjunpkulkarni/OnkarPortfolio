"use client";

import profileImage from "../images/ONKAR.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#DFD9E2] text-black overflow-hidden px-4 lg:px-8">
      {/* Background Text */}
      <div className="relative z-10 max-w-screen-xl mx-auto pt-20 lg:pt-32 grid lg:grid-cols-2 gap-12 items-center transform scale-60 origin-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6 pl-12 lg:pl-24">
          <div className="flex items-center gap-6 mb-8">
            <div>
              <h2 className="text-4xl font-bold">Onkar Gore</h2>
              <p className="text-gray-600">Finance B.S @ SUNY Oswego</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-semibold leading-tight">
            20-year-old UI/UX Designer based in New York.
          </h1>
          <p className="text-xl text-gray-800">
            Discover my work, experiences, and achievements here!
          </p>
          <div className="flex gap-4">
            <button 
              className="px-5 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact me
            </button>
            <div className="flex items-center gap-3">
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/onkarrgore/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity text-gray-800"
              >
                <FaInstagram size={30} />
              </a>
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/onkar-gore-a429292a2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity text-gray-800"
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
            className="w-[80%] h-[80%] rounded-full border-4 border-black/10" />
        </div>
      </div>
    </div>
  );
}
