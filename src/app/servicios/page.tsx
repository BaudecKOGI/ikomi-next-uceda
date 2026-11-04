import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Servicios | IKOMI Perú",
  description: "Ventas, asesoría, delivery y productos de IKOMI Perú.",
};

const servicios = [
  { titulo: "Ventas", texto: "Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japón, a los mejores precios del mercado." },
  { titulo: "Asesoría", texto: "Le brindamos una asesoría personalizada acerca de nuestros productos, para elegir el mejor repuesto para su movilidad." },
  { titulo: "Delivery", texto: "Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible." },
  { titulo: "Productos", texto: "Contamos con las mejores marcas y calidad de productos del mercado." },
];

export default function Servicios() {
  return (
    <section className="bg-ikomi-oscuro px-4 py-24 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
      <div className="mx-auto max-w-5xl">
        <SectionTitle titulo="Servicios" subtitulo="Estamos listos para atenderte." oscuro />
        <div className="grid gap-4 md:grid-cols-2">
          {servicios.map((s) => (
            <article key={s.titulo} className="rounded border-l-4 border-ikomi-rojo bg-white/10 p-6 text-white transition duration-300 hover:-translate-y-1 hover:bg-white/20">
              <h2 className="font-bold underline">{s.titulo}</h2>
              <p className="mt-2 text-sm">{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}