"use client";

import { Home, FolderClosed, Settings, Smartphone } from "lucide-react";

export default function Nav() {
  return (
    <nav className="flex gap-8 items-center bg-[#151312] justify-center">
      <div className="mt-8 flex flex-row gap-20">
      <a
        href="/"
        className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center"
        title="Home"
      >
        <Home className="w-6 h-6" />
      </a>
      <a
        href="/files"
        className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center"
        title="Files"
      >
        <FolderClosed className="w-6 h-6" />
      </a>
      <a
        href="/og"
        className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center"
        title="OG"
      >
        OG
      </a>
      <a
        href="/settings"
        className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center"
        title="Settings"
      >
        <Settings className="w-6 h-6" />
      </a>
      <a
        href="/mobile"
        className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center"
        title="Mobile"
      >
        <Smartphone className="w-6 h-6" />
      </a>
      </div>
    </nav>
  );
}
