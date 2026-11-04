import Image from "next/image";

type Props = {
  titulo: string;
  resaltado: string;
  subtitulo: string;
  imagen: string;
  alt: string;
};

export default function Hero({ titulo, resaltado, subtitulo, imagen, alt }: Props) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden bg-ikomi-oscuro md:min-h-[600px]">
      <Image
        src={imagen}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <div className="ml-auto max-w-xl text-right text-white">
          <h1 className="text-3xl font-extrabold uppercase md:text-5xl">{titulo}</h1>
          <p className="mt-2 text-2xl font-bold md:text-4xl">{resaltado}</p>
          <p className="mt-4 text-lg">{subtitulo}</p>
        </div>
      </div>
    </section>
  );
}