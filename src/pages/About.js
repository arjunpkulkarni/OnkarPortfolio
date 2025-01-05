"use client";

import profileImage from "../images/ONKAR.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-4 lg:px-8">
      {/* Background Text */}
      <div className="relative z-10 max-w-screen-xl mx-auto pt-20 lg:pt-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-6 mb-8">
            <img 
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white/10"
            />
            <div>
              <h2 className="text-2xl font-bold">Onkar Gore</h2>
              <p className="text-gray-400">Finance B.S @ SUNY Oswego</p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'm a 20-year-old UI/UX Designer from New York.
          </h1>
          <p className="text-xl text-gray-300">
            Discover my work, experiences, and achievements here!
          </p>
          <div className="flex gap-4">
            <button 
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
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

        {/* Right Column - Device Mockups */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Top Device */}
            <div className="col-span-2">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="UI Design mockup"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* Bottom Left Device */}
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Mobile app design"
                className="w-full rounded-xl"
              />
            </div>

            {/* Bottom Right Device */}
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Web design mockup"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
