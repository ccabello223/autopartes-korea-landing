import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, email, mensaje } = body;

        // Aquí guardas en BD o envías email
        console.log('Mensaje recibido:', { nombre, email, mensaje });

        return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al procesar' }, { status: 500 });
    }
}