"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10">
                            <img
                                src="/logo_korea_negro.png"
                                alt="Autopartes Korea II"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-bold text-xl text-gray-800">
                            Autopartes Korea II
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link href="#inicio" className="text-gray-600 hover:text-[#F81616] transition">Inicio</Link>
                        <Link href="#about" className="text-gray-600 hover:text-[#F81616] transition">Nosotros</Link>
                        <Link href="#productos" className="text-gray-600 hover:text-[#F81616] transition">Productos</Link>
                        <Link href="#beneficios" className="text-gray-600 hover:text-[#F81616] transition">Beneficios</Link>
                        <Link href="#testimonios" className="text-gray-600 hover:text-[#F81616] transition">Testimonios</Link>
                        <Link href="#contacto" className="text-gray-600 hover:text-[#F81616] transition">Contacto</Link>
                    </div>

                    <div className="hidden md:block">
                        <a href="#contacto" className="bg-[#F81616] text-white px-6 py-2 rounded-lg hover:bg-[#D90000] transition">
                            Cotizar ahora
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-600 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-3 pb-3">
                        <Link href="#inicio" className="block text-gray-600 hover:text-[#F81616]">Inicio</Link>
                        <Link href="#about" className="block text-gray-600 hover:text-[#F81616]">Nosotros</Link>
                        <Link href="#productos" className="block text-gray-600 hover:text-[#F81616]">Productos</Link>
                        <Link href="#beneficios" className="block text-gray-600 hover:text-[#F81616]">Beneficios</Link>
                        <Link href="#testimonios" className="block text-gray-600 hover:text-[#F81616]">Testimonios</Link>
                        <Link href="#contacto" className="block text-gray-600 hover:text-[#F81616]">Contacto</Link>
                        <a href="#contacto" className="block bg-[#F81616] text-white px-4 py-2 rounded-lg text-center">Cotizar ahora</a>
                    </div>
                )}
            </nav>
        </header>
    );
}