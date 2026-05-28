import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const socialLinks = [
        {
            name: "Facebook",
            icon: FaFacebook,
            url: "https://www.facebook.com/people/AutoParteskorea2/100078217153458/",
            color: "#1877F2"
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://www.instagram.com/autoparteskorea2/",
            color: "#E4405F"
        },
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            url: "https://api.whatsapp.com/send?phone=584249088139&text=Hola%2C%20estoy%20solicitando%20informaci%C3%B3n%20desde%20la%20tienda%20virtual%20sobre%20",
            color: "#25D366"
        },
    ];
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">

                            <div className="relative w-10 h-10">
                                <img
                                    src="/logo_korea_negro.png"
                                    alt="Autopartes Korea II"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            Autopartes Korea II
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Repuestos originales y de alta calidad para vehículos coreanos.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Enlaces útiles</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#inicio" className="hover:text-[#F81616] transition">Inicio</Link></li>
                            <li><Link href="#about" className="hover:text-[#F81616] transition">Sobre nosotros</Link></li>
                            <li><Link href="#productos" className="hover:text-[#F81616] transition">Productos</Link></li>
                            <li><Link href="#contacto" className="hover:text-[#F81616] transition">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Dirección: Estamos ubicados en Unare 2, Av2, Casa 16. Al lado del colegio La Consolacion. Puerto Ordaz. Edo. Bolivar</li>
                            <li>Horario: Lun-Vie 9:00-19:00</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F81616] transition transform hover:scale-110 group"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5 group-hover:text-white transition" />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="mt-4 text-gray-400 text-sm">
                            <p>📱 Escríbenos por WhatsApp</p>
                            <p className="text-[#F81616]">+56 9 8765 4321</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Autopartes Korea II. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}