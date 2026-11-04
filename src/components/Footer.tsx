import Link from "next/link";
import { enlaces } from "@/data/enlaces";

export default function Footer() {
  return (
    <footer className="bg-ikomi-oscuro text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_2fr_1fr]">
        <div>
          <h2 className="text-xl font-extrabold">IKOMI PERU</h2>
          <p className="mt-2 text-sm">
            Empresa importadora y comercializadora de repuestos para todo tipo
            de vehículos con calidad y a precios de mercado.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-6 text-center text-gray-700 sm:col-span-2">
            <h3 className="text-lg font-bold">Dirección</h3>
            <p className="mt-2 text-sm">
              Avenida Nicolás Ayllon 3384
              <br />
              Carretera Central - Paradero Rayovac
              <br />
              Lima - Ate
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center text-gray-700">
            <h3 className="text-lg font-bold">Correo</h3>
            <p className="mt-2 text-sm">ventas@ikomiperu.com</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center text-gray-700">
            <h3 className="text-lg font-bold">Teléfonos</h3>
            <p className="mt-2 text-sm">
              985 068 416
              <br />
              981 453 306
            </p>
          </div>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h3 className="font-bold">Links</h3>
          <div className="mt-2 h-0.5 w-8 bg-ikomi-rojo" />
          <ul className="mt-4 space-y-2 text-sm">
            {enlaces.map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  className="transition-colors hover:text-ikomi-activo"
                >
                  {e.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-black py-4 text-center text-xs">
        Copyright © {new Date().getFullYear()} Grupo IKOMI PERU
      </div>
    </footer>
  );
}