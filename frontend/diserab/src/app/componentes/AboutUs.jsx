import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Columna de texto */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-center md:text-left mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-gray-400 text-center md:text-left max-w-xl mb-8 leading-relaxed">
            En <span className="text-white font-semibold">DISERAB</span> nos especializamos en ofrecer materiales de construcción y maquinaria de alta calidad, diseñados para satisfacer las necesidades de proyectos de cualquier tamaño. Nuestra misión es ser el socio confiable que acompaña a nuestros clientes en la construcción de sus sueños, brindando soluciones innovadoras y productos que destacan por su durabilidad y eficiencia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105 duration-300">
              Conoce Más
            </button>
            <button className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
              Contáctanos
            </button>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="flex-1">
          <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/DiserabAU.jpg" // Asegúrate de que el nombre y la extensión coincidan con el archivo en public
              alt="Imagen sobre nosotros de DISERAB"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
