"use client";

import Link from 'next/link';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-28"
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Autopartes Coreanas de Calidad
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                    Encuentra el repuesto que necesitas para tu vehículo al mejor precio
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#productos"
                        className="bg-[#F81616] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D90000] transition transform hover:scale-105 inline-block"
                    >
                        Ver Productos
                    </a>
                    <a
                        href="#contacto"
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
                    >
                        Cotizar Ahora
                    </a>
                </div>
            </div>
        </section>
    );
}