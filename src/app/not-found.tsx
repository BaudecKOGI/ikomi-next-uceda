import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas en IKOMI no existe.</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
}