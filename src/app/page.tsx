import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | IKOMI Perú",
  description: "Repuestos en general para camiones de todas las marcas.",
};

export default function Home() {
  return <h1>Inicio - IKOMI</h1>;
}