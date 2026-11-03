import Link from "next/link";
import { notFound } from "next/navigation";
import { productos } from "@/data/productos";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: `${producto.nombre} | IKOMI Perú`,
    description: producto.descripcion,
  };
}

export default async function DetalleProducto({ params }: Props) {
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
      <Link href="/productos">Volver a productos</Link>
    </div>
  );
}