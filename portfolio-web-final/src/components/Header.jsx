import React from "react";

export default function Header() {
  return (
    <>
     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-900/30 backdrop-blur-md shadow-lg rounded-full px-8 py-3 flex gap-6 z-50 text-gray-200">
      <a href="#Link" className="hover:text-blue-500">Github</a>
      <a href="#work" className="hover:text-blue-500">Linkdn</a>
      <a href="#about" className="hover:text-blue-500">Instagram</a>
    </nav>
    </>
  );
}
