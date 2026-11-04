import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Inicio | IKOMI Perú",
  description: "Repuestos en general para camiones de todas las marcas.",
};

export default function Home() {
  return (
    <Hero
      titulo="Repuestos en general"
      resaltado="para camiones de todas las marcas."
      subtitulo="Somos una empresa importadora de repuestos."
      imagen="/images/hero-repuestos.jpg"
      alt="Repuestos para camiones como discos de freno, embragues y filtros"
    />
  );
}