"use client"; // This marks the component as a client component

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-300">
          DISERAB
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-gray-300 transition relative group">
            <span className="group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-0 group-hover:after:h-0.5 group-hover:after:w-full group-hover:after:bg-gray-300 after:content-['']"></span>
            Sobre Nosotros
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition relative group">
            <span className="group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-0 group-hover:after:h-0.5 group-hover:after:w-full group-hover:after:bg-gray-300 after:content-['']"></span>
            Servicios
          </Link>
          <Link href="/portfolio" className="hover:text-gray-300 transition relative group">
            <span className="group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-0 group-hover:after:h-0.5 group-hover:after:w-full group-hover:after:bg-gray-300 after:content-['']"></span>
            Portafolio
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition relative group">
            <span className="group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-0 group-hover:after:h-0.5 group-hover:after:w-full group-hover:after:bg-gray-300 after:content-['']"></span>
            Contactanos
          </Link>
        </div>
      </div>

      {/* Links for mobile */}
      {isOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <Link href="/about" className="block hover:text-gray-300 transition">
            Sobre Nostros
          </Link>
          <Link href="/services" className="block hover:text-gray-300 transition">
            Servicios
          </Link>
          <Link href="/portfolio" className="block hover:text-gray-300 transition">
            Portafolio
          </Link>
          <Link href="/contact" className="block hover:text-gray-300 transition">
            Contactanos
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
