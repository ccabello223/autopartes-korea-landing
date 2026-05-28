"use client";

import { useForm } from 'react-hook-form';

interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
}

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                alert('¡Mensaje enviado correctamente! Nos contactaremos pronto.');
                reset();
            } else {
                alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error(error);
            alert('Error de conexión. Verifica tu internet.');
        }
    };

    return (
        <section className="py-16 bg-white" id="contacto">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Contáctanos
                </h2>
                <div className="w-24 h-1 bg-[#F81616] mx-auto mb-8"></div>
                <p className="text-center text-gray-600 mb-8">
                    ¿Necesitas un repuesto en específico? Escríbenos y te cotizamos al instante
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            {...register('nombre', { required: 'El nombre es requerido' })}
                            placeholder="Nombre completo *"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F81616] focus:border-[#F81616] outline-none"
                        />
                        {errors.nombre && <span className="text-[#F81616] text-sm">{errors.nombre.message}</span>}
                    </div>

                    <div>
                        <input
                            {...register('email', {
                                required: 'El email es requerido',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Email inválido'
                                }
                            })}
                            placeholder="Correo electrónico *"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F81616] focus:border-[#F81616] outline-none"
                        />
                        {errors.email && <span className="text-[#F81616] text-sm">{errors.email.message}</span>}
                    </div>

                    <div>
                        <textarea
                            {...register('mensaje', { required: 'El mensaje es requerido' })}
                            placeholder="¿Qué repuesto necesitas? *"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F81616] focus:border-[#F81616] outline-none"
                        ></textarea>
                        {errors.mensaje && <span className="text-[#F81616] text-sm">{errors.mensaje.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#F81616] text-white py-3 rounded-lg font-semibold hover:bg-[#D90000] transition transform hover:scale-105"
                    >
                        Enviar mensaje ✉️
                    </button>
                </form>
            </div>
        </section>
    );
}