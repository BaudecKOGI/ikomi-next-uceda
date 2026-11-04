export type Producto = {
  slug: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
};

export const productos: Producto[] = [
  {
    slug: "disco-de-embrague",
    nombre: "Disco de embrague",
    categoria: "Disco, plato y collarín de embrague",
    descripcion: "Disco de embrague para camiones, repuesto de Korea y Japón.",
    imagen: "/images/productos/disco-embrague.jpg",
  },
  {
    slug: "corona-y-pinon",
    nombre: "Corona y piñón",
    categoria: "Piñón y parte de caja",
    descripcion: "Juego de corona y piñón para cajas y transmisiones.",
    imagen: "/images/productos/corona-pinon.jpg",
  },
  {
    slug: "plato-de-embrague",
    nombre: "Plato de embrague",
    categoria: "Disco, plato y collarín de embrague",
    descripcion: "Plato de embrague para camiones de varias marcas.",
    imagen: "/images/productos/plato-embrague.jpg",
  },
  {
    slug: "pastillas-de-freno",
    nombre: "Pastillas de freno",
    categoria: "Pastilla y zapata de freno",
    descripcion: "Pastillas de freno de calidad para vehículos de Korea y Japón.",
    imagen: "/images/productos/pastillas-freno.jpg",
  },
  {
    slug: "eje-de-caja",
    nombre: "Eje de caja",
    categoria: "Piñón y parte de caja",
    descripcion: "Eje de caja de cambios con sus piñones.",
    imagen: "/images/productos/eje-caja.jpg",
  },
  {
    slug: "volante-bimasa",
    nombre: "Volante bimasa",
    categoria: "Disco, plato y collarín de embrague",
    descripcion: "Volante bimasa con kit de embrague.",
    imagen: "/images/productos/volante-bimasa.jpg",
  },
];