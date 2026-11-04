import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Nosotros | IKOMI Perú",
  description: "Conoce al equipo, el almacén y la tienda de IKOMI Perú.",
};

const fotos = [
  { titulo: "Equipo", imagen: "/images/nosotros/equipo.jpg", alt: "Equipo de trabajo de IKOMI Perú junto a camiones" },
  { titulo: "Almacén", imagen: "/images/nosotros/almacen.jpg", alt: "Pasillo del almacén de IKOMI Perú con estantes de repuestos" },
  { titulo: "Tienda", imagen: "/images/nosotros/tienda.jpg", alt: "Frente de la tienda de IKOMI Perú" },
  { titulo: "Empresa", imagen: "/images/nosotros/empresa.jpg", alt: "Edificio de la empresa IKOMI Perú" },
];

export default function Nosotros() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle titulo="Nosotros" subtitulo="Conoce a nuestro equipo, almacén y tienda." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fotos.map((f) => (
          <article key={f.titulo} className="rounded-lg bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="bg-gray-700 py-2 text-center text-sm text-white">{f.titulo}</h2>
            <Image
              src={f.imagen}
              alt={f.alt}
              width={600}
              height={450}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="mt-4 h-auto w-full object-cover"
            />
          </article>
        ))}
      </div>
    </section>
  );
}