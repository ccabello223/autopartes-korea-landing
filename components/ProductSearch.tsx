"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Producto {
    idproducto: number;
    codigo: string;
    nombre: string;
    precio1: string;
    precio2: string;
    stock: number;
    marca: { nombre: string };
    foto_productos: { img: string }[];
}

export default function ProductSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false);

    // Función de búsqueda mejorada
    const searchProducts = async () => {
        if (!searchTerm.trim()) {
            // Si el término está vacío, recargar productos iniciales
            fetchInitialProducts();
            return;
        }

        setSearching(true);
        setLoading(true);

        const searchTermNormalized = searchTerm.trim().toUpperCase();

        try {
            let resultados: Producto[] = [];

            // 1. Búsqueda estándar (por defecto busca en idproducto, código y nombre)
            const res1 = await axios.get(`https://coreanosrptos.com/api/productos/search?idproducto=${encodeURIComponent(searchTermNormalized)}`);
            resultados = res1.data.productos || [];

            // 2. Si no hay resultados, intentar búsqueda específica por código
            if (resultados.length === 0) {
                const res2 = await axios.get(`https://coreanosrptos.com/api/productos/search?codigo=${encodeURIComponent(searchTermNormalized)}`);
                resultados = res2.data.productos || [];
            }

            // 3. Si aún no hay resultados, intentar búsqueda específica por descripcion
            if (resultados.length === 0) {
                const res3 = await axios.get(`https://coreanosrptos.com/api/productos/search?descripcion=${encodeURIComponent(searchTermNormalized)}`);
                resultados = res3.data.productos || [];
            }

            setProductos(resultados);

        } catch (error) {
            console.error('Error en búsqueda:', error);
            setProductos([]);
        } finally {
            setLoading(false);
            setSearching(false);
        }
    };

    // Cargar productos iniciales
    const fetchInitialProducts = async () => {
        setLoading(true);
        try {
            const res = await axios.get('https://coreanosrptos.com/api/productos?cant_prod=12');
            setProductos(res.data.productos);
        } catch (error) {
            console.error('Error cargando productos iniciales:', error);
        } finally {
            setLoading(false);
        }
    };

    // Efecto para cargar productos al montar el componente
    useEffect(() => {
        fetchInitialProducts();
    }, []);

    // Manejar búsqueda con debounce (opcional, para mejor experiencia)
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchTerm === '') {
                fetchInitialProducts();
            }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    return (
        <section className="py-16 bg-gray-50" id="productos">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Nuestros Productos
                </h2>
                <div className="w-24 h-1 bg-[#F81616] mx-auto mb-4"></div>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Más de 5,000 repuestos disponibles para tu vehículo coreano
                </p>

                {/* Buscador mejorado */}
                <div className="max-w-xl mx-auto mb-12">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Buscar por nombre, código"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && searchProducts()}
                            className="flex-1 px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F81616] focus:border-[#F81616] outline-none"
                        />
                        <button
                            onClick={searchProducts}
                            disabled={searching}
                            className="bg-[#F81616] text-white px-6 py-3 rounded-lg hover:bg-[#D90000] transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {searching ? 'Buscando...' : 'Buscar 🔍'}
                        </button>
                    </div>

                    {/* Indicador de búsqueda avanzada */}
                    {searching && (
                        <p className="text-sm text-gray-500 mt-2 text-center">
                            Buscando en código, nombre y descripción...
                        </p>
                    )}
                </div>

                {/* Resultados */}
                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#F81616]"></div>
                        <p className="mt-2 text-gray-600">Cargando productos...</p>
                    </div>
                ) : (
                    <>
                        {/* Contador de resultados */}
                        <div className="mb-4 text-right text-sm text-gray-500">
                            {productos.length > 0 && (
                                <span>Se encontraron {productos.length} productos</span>
                            )}
                        </div>

                        {/* Grid de productos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {productos.map((producto) => (
                                <div
                                    key={producto.idproducto}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative h-48 bg-gray-100">
                                        {producto.foto_productos && producto.foto_productos[0] ? (
                                            <img
                                                src={`https://coreanosrptos.com/api/foto_producto/uploads/${producto.foto_productos[0].img}`}
                                                alt={producto.nombre}
                                                className="w-full h-full object-contain p-4"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = '/placeholder-product.jpg';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                Sin imagen
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <div className="text-xs text-gray-500 mb-1">{producto.marca?.nombre || 'Sin marca'}</div>
                                        <h3 className="text-black font-bold text-md mb-2 line-clamp-2 h-12">{producto.nombre}</h3>
                                        <div className="text-gray-600 text-xs mb-2">Código: {producto.codigo}</div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-gray-400 line-through text-sm">${parseInt(producto.precio1).toLocaleString()}</span>
                                            <span className="text-[#F81616] font-bold text-xl">${parseInt(producto.precio2).toLocaleString()}</span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className={`text-xs font-semibold px-2 py-1 rounded ${producto.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                }`}>
                                                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Agotado'}
                                            </span>
                                            <a
                                                href="#contacto"
                                                className="text-[#F81616] text-sm font-semibold hover:text-[#D90000]"
                                            >
                                                Consultar →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {productos.length === 0 && !loading && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No se encontraron productos para "{searchTerm}"</p>
                                <p className="text-gray-400 text-sm mt-2">
                                    Sugerencias: Revisa la ortografía o intenta con otro término
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}