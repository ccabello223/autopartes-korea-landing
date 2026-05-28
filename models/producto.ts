// models/Producto.ts
export interface Marca {
    id: number;
    nombre: string;
}

export interface FotoProducto {
    id: number;
    producto_id: number;
    img: string;
}

export interface Producto {
    idproducto: number;
    codigo: string;
    nombre: string;
    distid: string;
    precio1: string;
    precio2: string;
    stock: number;
    views_count: number;
    views_count_user: number;
    marca: Marca;
    foto_productos: FotoProducto[];
}

export interface ApiResponse {
    total: number;
    productos: Producto[];
}