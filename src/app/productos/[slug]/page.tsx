import Image from "next/image";
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
    <section className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/productos" className="text-ikomi-azul underline">
        ← Volver a productos
      </Link>
      <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
        <Image
          src={producto.imagen}
          alt={`${producto.nombre}, repuesto para camiones de IKOMI Perú`}
          width={600}
          height={600}
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full rounded-lg shadow-md"
        />
        <div>
          <p className="text-sm font-semibold uppercase text-ikomi-rojo">{producto.categoria}</p>
          <h1 className="mt-2 text-3xl font-extrabold">{producto.nombre}</h1>
          <p className="mt-4 text-gray-700">{producto.descripcion}</p>
          <Link
            href="/contacto"
            className="mt-6 inline-block rounded bg-ikomi-rojo px-5 py-2 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Consultar este producto
          </Link>
        </div>
      </div>
    </section>
  );
}