import { notFound } from "next/navigation";
import { productos } from "@/data/productos";
import type { Metadata } from "next";

// Metadatos dinámicos basados en el producto
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) {
    return { title: 'Producto no encontrado' };
  }

  return {
    title: `${producto.nombre} | IKOMI Perú`,
    description: producto.descripcion,
  };
}

export default async function DetalleProducto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) {
    notFound();
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <br />
      <a href="/productos">Volver a productos</a>
    </div>
  );
}