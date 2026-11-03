"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/servicios", texto: "Servicios" },
  { href: "/productos", texto: "Productos" },
  { href: "/marcas", texto: "Marcas" },
  { href: "/contacto", texto: "Contáctenos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  // "/" solo está activo en la home; los demás también en sus subrutas
  // (así /productos/laptop-pro mantiene resaltado "Productos")
  const esActivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const claseEnlace = (href: string) =>
    `font-semibold transition-colors hover:text-ikomi-activo ${
      esActivo(href) ? "text-ikomi-activo" : "text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-ikomi-azul shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo provisional en texto; en la Parte 4 se cambia por next/image */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setAbierto(false)}
        >
          <span className="leading-none text-white">
            <span className="block text-xl font-extrabold tracking-wide">
              IKOMI PERÚ
            </span>
            <span className="block bg-ikomi-rojo px-1 text-[9px] font-bold">
              REPUESTOS DE KOREA Y JAPON
            </span>
          </span>
          <span className="border-y-4 border-ikomi-rojo bg-white px-2 text-2xl font-black text-ikomi-azul">
            IKM
          </span>
        </Link>

        {/* Botón hamburguesa: solo visible en pantallas pequeñas */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-label="Abrir o cerrar el menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {abierto ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden items-center gap-6 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className={claseEnlace(e.href)}
                aria-current={esActivo(e.href) ? "page" : undefined}
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menú móvil desplegable */}
      {abierto && (
        <ul className="flex flex-col gap-1 border-t border-white/20 px-4 pb-4 md:hidden">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className={`block py-2 ${claseEnlace(e.href)}`}
                aria-current={esActivo(e.href) ? "page" : undefined}
                onClick={() => setAbierto(false)}
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}