'Use client'
import React from 'react'


const Services = () => {
    return (
        <div className="bg-black text-white min-h-screen py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Nuestros Servicios</h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            En <span className="text-white font-semibold">DISERAB</span>, ofrecemos una variedad de servicios diseñados para satisfacer todas tus necesidades de construcción, garantizando calidad y eficiencia en cada proyecto.
          </p>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Asesoría Personalizada</h3>
              <p className="text-gray-400 mb-4">
                Te ayudamos a elegir los materiales y maquinaria ideales para tu proyecto.
              </p>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
                Más Información
              </button>
            </div>
    
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Alquiler de Maquinaria</h3>
              <p className="text-gray-400 mb-4">
                Disponemos de maquinaria moderna para satisfacer las demandas de tu obra.
              </p>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
                Ver Más
              </button>
            </div>
    
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Suministro de Materiales</h3>
              <p className="text-gray-400 mb-4">
                Cemento, varillas, bloques de concreto y más para tus proyectos.
              </p>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
                Ver Productos
              </button>
            </div>
    
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Transporte y Logística</h3>
              <p className="text-gray-400 mb-4">
                Entregamos tus pedidos de manera rápida y segura en el lugar que necesites.
              </p>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
                Contáctanos
              </button>
            </div>
    
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Consultoría en Construcción</h3>
              <p className="text-gray-400 mb-4">
                Expertos a tu disposición para asesorarte en cada etapa de tu proyecto.
              </p>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
                Más Información
              </button>
            </div>
    
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Soporte Técnico</h3>
              <p className="text-gray-400 mb-4">
                Atención especializada para resolver cualquier duda o inconveniente.
              </p>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      );
    };

export default Services;
