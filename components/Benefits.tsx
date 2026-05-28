export default function Benefits() {
    const benefits = [
        {
            icon: "🚗",
            title: "Repuestos Originales",
            description: "Garantizamos autenticidad y calidad en cada producto"
        },
        {
            icon: "💰",
            title: "Mejor Precio",
            description: "Los precios más competitivos del mercado"
        },
        {
            icon: "⚡",
            title: "Envío Rápido",
            description: "Entregas en 24-48 horas en toda la ciudad"
        },
        {
            icon: "🔧",
            title: "Asesoría Técnica",
            description: "Personal capacitado para ayudarte"
        },
        {
            icon: "✅",
            title: "Garantía",
            description: "Todos los productos con garantía de fábrica"
        },
        {
            icon: "📦",
            title: "Gran Stock",
            description: "Más de 5,000 productos disponibles"
        }
    ];

    return (
        <section id="beneficios" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    ¿Por qué elegirnos?
                </h2>
                <div className="w-24 h-1 bg-[#F81616] mx-auto mb-4"></div>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Ofrecemos la mejor experiencia en compra de repuestos coreanos
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block p-4 bg-red-50 rounded-full">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}