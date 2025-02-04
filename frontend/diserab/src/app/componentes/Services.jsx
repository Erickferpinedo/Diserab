import React from 'react';

const Services = () => {
  return (
    <>
      {/* Sección de Servicios Clave */}
      <section id='services'  className="py-12 px-4 sm:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <h2  className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
          Nuestros Servicios Clave
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-neutral-800 p-8 rounded-xl transform transition duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Distribución de Acero, Hierro y Cemento
            </h3>
            <p className="text-gray-400 text-base">
              Suministramos materiales de la más alta calidad para tu proyecto, asegurando resistencia y durabilidad en cualquier obra.
            </p>
          </div>
          <div className="bg-neutral-800 p-8 rounded-xl transform transition duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Alquiler de Maquinaria
            </h3>
            <p className="text-gray-400 text-base">
              Ponemos a tu disposición equipos modernos y seguros, optimizando costos y tiempos en cada fase de la construcción.
            </p>
          </div>
          <div className="bg-neutral-800 p-8 rounded-xl transform transition duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Ejecución de Obras Civiles
            </h3>
            <p className="text-gray-400 text-base">
              Contamos con profesionales experimentados para desarrollar proyectos civiles con altos estándares de calidad y seguridad.
            </p>
          </div>
          <div className="bg-neutral-800 p-8 rounded-xl transform transition duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Transporte de Materiales
            </h3>
            <p className="text-gray-400 text-base">
              Aseguramos entregas puntuales y seguras de tus materiales en cualquier punto de Cesar y otras regiones de Colombia.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="bg-gray-900 py-20 px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
          ¡Construye con los Mejores!
        </h2>
        <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
          Pon en marcha tus proyectos de construcción con la solidez de nuestros materiales y la experiencia de nuestro equipo. Operamos en todo el departamento de Cesar y en el resto de Colombia para brindarte un servicio ágil y de confianza.
        </p>
        <button href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105 duration-300">
          Solicita tu Cotización
        </button>
      </section>
    </>
  );
};

export default Services;
