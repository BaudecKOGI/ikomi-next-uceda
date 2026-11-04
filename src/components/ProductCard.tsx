import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  nombre: string;
  categoria: string;
  imagen: string;
};

export default function ProductCard({ slug, nombre, categoria, imagen }: Props) {
  return (
    <Link
      href={`/productos/${slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <Image
          src={imagen}
          alt={`${nombre}, repuesto para camiones de IKOMI Perú`}
          width={600}
          height={600}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold">{nombre}</h3>
        <p className="mt-1 text-sm text-gray-600">{categoria}</p>
      </div>
    </Link>
  );
}