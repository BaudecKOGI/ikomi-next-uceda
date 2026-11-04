type Props = {
  titulo: string;
  subtitulo?: string;
  oscuro?: boolean;
};

export default function SectionTitle({ titulo, subtitulo, oscuro = false }: Props) {
  return (
    <div className="mb-10 text-center">
      <h1
        className={`text-3xl font-extrabold uppercase ${
          oscuro ? "text-white" : "text-ikomi-oscuro"
        }`}
      >
        {titulo}
      </h1>
      <div className="mx-auto mt-3 h-0.5 w-16 bg-ikomi-rojo" />
      {subtitulo && (
        <p className={`mt-4 ${oscuro ? "text-white" : "text-gray-700"}`}>
          {subtitulo}
        </p>
      )}
    </div>
  );
}