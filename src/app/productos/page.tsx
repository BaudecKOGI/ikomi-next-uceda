import Link from "next/link";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: 'Productos | IKOMI Perú',
  description: 'Catálogo de productos tecnológicos de IKOMI Perú.',
};

export default function Productos() {
  return (
    <div>
      <h1>Página de Productos - IKOMI</h1>
      <ul>
        {productos.map((prod) => (
          <li key={prod.slug}>
            {/* Enlace dinámico a la ruta /productos/[slug] */}
            <Link href={`/productos/${prod.slug}`}>
              {prod.nombre} - ${prod.precio}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}