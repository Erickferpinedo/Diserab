import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo o Nombre */}
        <h2 className="text-3xl font-bold text-white mb-4 hover:text-blue-500 transition duration-300">
          DISERAB
        </h2>

        {/* Sección de enlaces */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
          <a href="#about-us" className="hover:text-white transition duration-300">
            Sobre Nosotros
          </a>
          <a href="#services" className="hover:text-white transition duration-300">
            Servicios
          </a>
          <a href="#contact" className="hover:text-white transition duration-300">
            Contáctanos
          </a>
          <a href="#privacy" className="hover:text-white transition duration-300">
            Política de Privacidad
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300 text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition duration-300 text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:info@diserab.com"
            className="text-gray-400 hover:text-yellow-500 transition duration-300 text-xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-500">
          © 2025 DISERAB. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
