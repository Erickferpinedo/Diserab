"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-xl font-semibold text-black hover:text-gray-700 transition">
          DISERAB
        </Link>

        {/* Enlaces para desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="#about-us" className="relative text-black hover:text-gray-700 transition group">
            Sobre Nosotros
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="relative text-black hover:text-gray-700 transition group">
            Servicios
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link href="#contact" className="relative text-black hover:text-gray-700 transition group">
            Contáctanos
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Botón para mobile */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black my-1 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Enlaces para mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 transition-all duration-300 ease-in-out">
          <Link href="about" className="block py-2 text-black hover:text-gray-700 transition">
            Sobre Nosotros
          </Link>
          <Link href="services" className="block py-2 text-black hover:text-gray-700 transition">
            Servicios
          </Link>
          
          <Link href="contact" className="block py-2 text-black hover:text-gray-700 transition">
            Contáctanos
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
