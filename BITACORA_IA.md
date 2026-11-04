# Bitácora de Uso de Inteligencia Artificial

## Entrada 1: Configuración inicial y problemas con GitHub

* **Objetivo:** Crear el proyecto base en Next.js, configurar las herramientas y subir el primer avance a GitHub desde una Mac.
* **Prompt utilizado:** Necesito ayuda para crear mi proyecto Next.js para el examen, uso una Mac y no tengo configurado GitHub en la terminal, qué comandos uso y cómo justifico mis decisiones.
* **Resumen de la respuesta:** La IA me dio el comando para crear el proyecto con TypeScript y Tailwind, me explicó cómo entrar a GitHub con un token porque mi terminal tenía otra cuenta y daba error 403, y me ayudó con DECISIONES.md.
* **Decisión tomada:** Aceptado con modificaciones.
* **Justificación:** Acepté los comandos porque funcionaron, pero cambié los textos de DECISIONES.md para que estén con mis palabras y hablen del sitio de IKOMI.

## Entrada 2: Identidad de Git en mi laptop

* **Objetivo:** Clonar el proyecto en mi laptop con Windows y arreglar que mis commits salían con otro autor.
* **Prompt utilizado:** Mis commits salen como brayan10 aunque puse bien mis credenciales, qué hago.
* **Resumen de la respuesta:** La IA explicó que las credenciales sirven para hacer push, pero el autor sale de user.name y user.email que quedan guardados en cada commit.
* **Decisión tomada:** Aceptado.
* **Justificación:** Lo comprobé con git log y vi que el correo de los commits era el viejo.

## Entrada 3: Error de build con force-dynamic

* **Objetivo:** Que el build pasara en Render.
* **Prompt utilizado:** Pegué el error del despliegue de Render y pregunté qué hacer.
* **Resumen de la respuesta:** La IA explicó que export const dynamic no es compatible con Cache Components y propuso quitarlo y usar generateStaticParams.
* **Decisión tomada:** Aceptado.
* **Justificación:** Antes tenía force-dynamic en la página de producto, después lo quité y usé generateStaticParams, porque mis 3 productos están en un archivo local y no cambian.

## Entrada 4: Navbar con enlace activo y menú responsive

* **Objetivo:** Crear la barra de navegación de la Parte 3.
* **Prompt utilizado:** Pedí la barra de navegación con Link, enlace activo y menú hamburguesa.
* **Resumen de la respuesta:** La IA me dio un componente Navbar con `use client`, usePathname para el enlace activo y useState para abrir el menú.
* **Decisión tomada:** Aceptado.
* **Justificación:** Cumple los puntos 3.1 a 3.3, y entendí que usePathname da la ruta actual y que useState abre y cierra el menú.

## Entrada 5: Componentes y estilos de la Parte 4

* **Objetivo:** Hacer los componentes, los estilos y las pantallas del sitio de IKOMI.
* **Prompt utilizado:** Pasé las capturas del profesor y el enunciado de la Parte 4 y pedí los componentes y las páginas.
* **Resumen de la respuesta:** La IA me dio los componentes Footer, Hero, ProductCard, SectionTitle y ContactForm, la fuente con next/font, las imágenes con next/image, y las páginas con Tailwind.
* **Decisión tomada:** Aceptado.
* **Justificación:** Lo revisé en 375, 768 y 1280 de ancho y entendí qué hace cada componente, y cambié los textos de productos por los de IKOMI.

## Errores de la IA detectados y corregidos

### Caso 1: force-dynamic en la ruta de producto

Qué hizo mal la IA: propuso force-dynamic, que no es compatible con Cache Components, y el build fallaba.

Antes:

```tsx
export const dynamic = 'force-dynamic';
```

Después:

```tsx
export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}
```

Corrección: quité force-dynamic y usé generateStaticParams, porque mis productos están en un archivo local y no cambian, entonces las páginas se arman en el build.

### Caso 2: configuración de Tailwind y next.config.ts

Qué hizo mal la IA: dejó partialPrefetching, que necesita cacheComponents, y un loader de turbopack para Tailwind que no corresponde a Next.js.

Antes:

```ts
const nextConfig: NextConfig = {
  partialPrefetching: true,
  turbopack: {
    rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } },
  },
};
```

Después:

```ts
const nextConfig: NextConfig = {};
```

Y se creó postcss.config.mjs con el plugin @tailwindcss/postcss.

Corrección: Tailwind se conecta a Next.js con PostCSS, y partialPrefetching no se necesita porque quité Cache Components.

### Caso 3: página de inicio sin export default

Qué hizo mal la IA: me dijo que agregara la metadata arriba del export default sin ver mi archivo, y page.tsx quedó sin componente, entonces el build falló con el error Property default is missing.

Antes:

```tsx
export const metadata = {
  title: "Inicio | IKOMI Perú",
};
```

Después:

```tsx
export const metadata: Metadata = {
  title: "Inicio | IKOMI Perú",
  description: "Repuestos en general para camiones de todas las marcas.",
};

export default function Home() {
  return <Hero /* props */ />;
}
```

Corrección: puse el archivo completo con la metadata y el componente, y aprendí a leer el error del build para ver qué faltaba.