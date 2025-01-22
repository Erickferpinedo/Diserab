"use client";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold tracking-wide mb-6">
          Materiales y Maquinaria de Construcción en <span className="text-gray-300">DISERAB</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Encuentra los mejores productos para tus proyectos de construcción, desde cemento de alta resistencia hasta maquinaria de última generación.
        </p>
        <button className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105 duration-300">
          Ver Productos
        </button>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">¿Por Qué Elegirnos?</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
          Somos tu socio confiable en materiales y maquinaria de construcción, ofreciendo soluciones de calidad para proyectos que inspiran.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105 duration-300">
            Nuestros Servicios
          </button>
          {/* <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105 duration-300">
            Contáctanos
          </button> */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-neutral-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Construye con los Mejores</h2>
        <p className="text-gray-400 mb-8">
          Descubre cómo nuestros productos y servicios pueden transformar tus proyectos en realidades sólidas y duraderas.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-110 duration-300">
          Contáctanos
        </button>
      </section>

    
    </div>
  );
};

export default HomePage;
