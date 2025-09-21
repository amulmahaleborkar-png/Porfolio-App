import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/2 backdrop-blur-sm shadow-lg rounded-full px-8 py-3 flex gap-6 z-50 transition-colors duration-300 ${
        scrolled ? "text-gray-500" : "text-gray-200"
      }`}
    >
      <a href="#home" className="hover:text-blue-500">
        Home
      </a>
      <a href="#work" className="hover:text-blue-500">
        Work
      </a>
      <a href="#about" className="hover:text-blue-500">
        About
      </a>
      <a href="#contact" className="hover:text-blue-500">
        Contact
      </a>
    </nav>
  );
}
