import type { Metadata } from "next";
import { productos } from "@/data/productos";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Productos | IKOMI Perú",
  description: "Catálogo de repuestos para camiones de IKOMI Perú.",
};

export default function Productos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle titulo="Nuestros productos" subtitulo="Los mejores productos y precios." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <ProductCard
            key={p.slug}
            slug={p.slug}
            nombre={p.nombre}
            categoria={p.categoria}
            imagen={p.imagen}
          />
        ))}
      </div>
    </section>
  );
}