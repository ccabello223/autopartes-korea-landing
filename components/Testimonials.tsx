"use client";

import { useState } from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Carlos Rodríguez",
            role: "Mecánico Automotriz",
            text: "Excelente servicio y repuestos de calidad. Llevo años comprando aquí y nunca me han fallado. Los precios son muy competitivos.",
            rating: 5
        },
        {
            id: 2,
            name: "María González",
            role: "Dueña de Taller",
            text: "El mejor lugar para conseguir repuestos coreanos. El personal es muy atento y siempre tienen lo que necesito en stock.",
            rating: 5
        },
        {
            id: 3,
            name: "Juan Pérez",
            role: "Cliente Particular",
            text: "Compré un alternador para mi Hyundai y llegó en perfectas condiciones. Muy contento con la compra.",
            rating: 5
        },
        {
            id: 4,
            name: "Ana Martínez",
            role: "Fletero",
            text: "Los envíos son súper rápidos y el seguimiento es excelente. Recomiendo 100% esta autopartes.",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section id="testimonios" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Lo que dicen nuestros clientes
                </h2>
                <div className="w-24 h-1 bg-[#F81616] mx-auto mb-4"></div>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Más de 5,000 clientes satisfechos confían en nosotros
                </p>

                {/* Desktop grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#F81616] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {testimonial.name[0]}
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-[#F81616] text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>

                {/* Mobile carousel */}
                <div className="md:hidden">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-14 h-14 bg-[#F81616] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                {testimonials[currentIndex].name[0]}
                            </div>
                            <div className="ml-4">
                                <h3 className="font-semibold text-gray-800 text-lg">{testimonials[currentIndex].name}</h3>
                                <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                        <div className="flex mb-3">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <span key={i} className="text-[#F81616] text-xl">★</span>
                            ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">"{testimonials[currentIndex].text}"</p>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                className="bg-[#F81616] text-white px-4 py-2 rounded-lg hover:bg-[#D90000] transition"
                            >
                                Anterior
                            </button>
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                                className="bg-[#F81616] text-white px-4 py-2 rounded-lg hover:bg-[#D90000] transition"
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}