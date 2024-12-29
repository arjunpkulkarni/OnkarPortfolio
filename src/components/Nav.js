"use client";

export default function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-gray-800 font-medium hover:text-purple-500 transition duration-300">
          Home
        </a>
        <a href="/files" className="text-gray-800 font-medium hover:text-purple-500 transition duration-300">
          Files
        </a>
        <a href="/og" className="text-gray-800 font-medium hover:text-purple-500 transition duration-300">
          OG
        </a>
        <a href="/settings" className="text-gray-800 font-medium hover:text-purple-500 transition duration-300">
          Settings
        </a>
        <a href="/mobile" className="text-gray-800 font-medium hover:text-purple-500 transition duration-300">
          Mobile
        </a>
      </div>
    </nav>
  );
}
