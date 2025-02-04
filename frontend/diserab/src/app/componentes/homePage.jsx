"use client";
import Head from "next/head";
import Image from "next/image";
import construccionHp from "/public/construccionHp.jpg"; // Adjust extension if needed

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DISERAB",
    "description": "Distribuidora de materiales de construcción como acero, hierro y cemento. Alquiler de maquinaria, ejecución de obras civiles y transporte de materiales en Cesar, Colombia.",
    "image": "https://yourdomain.com/construccionHp.jpg", // Replace with your domain & image path
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dirección de la empresa",
      "addressLocality": "YourCity",
      "addressRegion": "Cesar",
      "addressCountry": "Colombia"
    },
    "telephone": "+57-XXX-XXXXXXX", // Replace with real phone
    "url": "https://yourdomain.com",
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "XX.XXXXXX", // Replace with real coordinates
      "longitude": "-XX.XXXXXX"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "keywords": [
      "materiales de construcción en Cesar",
      "acero, hierro y cemento en Colombia",
      "alquiler de maquinaria en Cesar",
      "ejecución de obras civiles",
      "transporte de materiales en Cesar"
    ]
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          DISERAB - Materiales de Construcción, Maquinaria y Obras Civiles en
          Cesar, Colombia
        </title>
        <meta
          name="description"
          content="DISERAB es tu distribuidora confiable de acero, hierro y cemento, alquiler de maquinaria y ejecución de obras civiles en Cesar, Colombia."
        />
        <meta
          name="keywords"
          content="diserab, materiales de construcción, acero, hierro, cemento, alquiler de maquinaria, obras civiles, transporte de materiales, Cesar, Colombia"
        />
        <meta name="author" content="DISERAB" />
        {/* JSON-LD Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div id="home" className="bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-12 px-4 sm:px-6">
          {/* Background Image */}
          <Image
            src={construccionHp}
            alt="Proyecto de construcción en Cesar, Colombia"
            fill
            className="object-cover object-center absolute inset-0 z-0 opacity-30"
            priority
          />

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-6">
              Distribuidora de Materiales y Maquinaria en{" "}
              <span className="text-gray-300">Cesar, Colombia</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              En <strong>DISERAB</strong>, ofrecemos acero, hierro, cemento,
              alquiler de maquinaria, ejecución de obras civiles y transporte de
              materiales para fortalecer tus proyectos de construcción en
              Colombia.
            </p>
            <button className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105 duration-300">
              Ver Nuestros Productos
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
