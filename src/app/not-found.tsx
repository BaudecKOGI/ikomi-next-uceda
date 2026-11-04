import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold">404 - Página no encontrada</h1>
      <p className="mt-3">Lo sentimos, la página que buscas en IKOMI no existe.</p>
      <Link href="/" className="mt-6 inline-block font-semibold text-ikomi-azul underline">
        Volver al inicio
      </Link>
    </div>
  );
}