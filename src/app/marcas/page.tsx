import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Marcas | IKOMI Perú",
  description: "Marcas de repuestos de Korea y Japón que distribuye IKOMI Perú.",
};

const marcas = [
  { nombre: "Sangsin Brake", texto: "Fabricante líder en la industria coreana de piezas y partes para frenos de fricción, con más de 6 plantas a nivel mundial y proveedor OEM para Hyundai, Kia, GM Daewoo, SsangYong y Renault Samsung." },
  { nombre: "Hansang", texto: "La marca Hansang maneja una amplia gama de repuestos de parte de caja como piñón y corona, deslizante, piñones, trenfijo, satélites, planetarios, propulsor y bronces." },
  { nombre: "Mando", texto: "Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fábricas en el mundo, 16 centros de investigación y más de 11,000 trabajadores, su visión es crear productos seguros, ecológicos y de fácil uso." },
  { nombre: "TCIC", texto: "Tae Chul Industrial Co. fabrica piezas de automóviles con más de 70 años de experiencia en bombas y bombines de freno y embrague de la mejor calidad, y cuenta con 5 plantas en Asia." },
  { nombre: "PHC Valeo", texto: "Valeo Pyeong Hwa International es una compañía con más de 90 años de creación, socia de los principales fabricantes de automóviles y con operaciones en 33 países." },
  { nombre: "Yulim", texto: "Establecida en 1998, Yulim High-Tech ha crecido como una de las compañías líderes de la industria del automóvil en Corea, produce y exporta piezas para sistemas de suspensión y dirección." },
];

export default function Marcas() {
  return (
    <section className="bg-ikomi-oscuro px-4 py-24 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          titulo="Marcas"
          subtitulo="Contamos con las marcas más reconocidas en el mercado nacional e internacional, especializadas en la fabricación de repuestos para vehículos con altos estándares de calidad."
          oscuro
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marcas.map((m) => (
            <article key={m.nombre} className="rounded bg-white p-6 text-gray-700 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-xl font-extrabold text-ikomi-azul">{m.nombre}</h2>
              <p className="mt-3 text-sm">{m.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}