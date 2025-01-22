import React from 'react';
import Spline from '@splinetool/react-spline';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen   flex-col md:flex-row">
      {/* About Us Section */}
      <section id='AboutUs' className="py-16 px-6  w-full md:w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Sobre Nosotros</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
          En <span className="text-white font-semibold">DISERAB</span>, nos especializamos en ofrecer materiales de construcción y maquinaria de alta calidad, diseñados para satisfacer las necesidades de proyectos de cualquier tamaño. Nuestra misión es ser el socio confiable que acompaña a nuestros clientes en la construcción de sus sueños, brindando soluciones innovadoras y productos que destacan por su durabilidad y eficiencia.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
            Conoce Más
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-300">
            Contáctanos
          </button>
        </div>

        {/* <div className="w-96 h-96 mt-12 content-center	  ">
          <Spline scene="https://prod.spline.design/lcYqoUkXH2kKFh8w/scene.splinecode" />
        </div> */}
      </section>

      {/* Location Section
      <section className="py-16 px-6 bg-gray-900 w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestra Ubicación</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
          Estamos ubicados en el corazón de Valledupar, Cesar, para servirte con la mejor calidad y atención. Visítanos y descubre cómo podemos ayudarte a hacer realidad tus proyectos de construcción.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-110 duration-300">
            Contáctanos
          </button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8081913711513!2d-73.25766658319634!3d10.48230829367342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9cb4bb1f3d7%3A0xf105e9b3988c14ab!2sCl%208%20A%20%2313-97%2C%20Valledupar%2C%20Cesar!5e0!3m2!1ses!2sco!4v1719967008922!5m2!1ses!2sco"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 mt-12"
        ></iframe>
      </section> */}
    </div>
  );
};

export default AboutUs;
