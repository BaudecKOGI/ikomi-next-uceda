# IKOMI Perú - Sitio web corporativo con Next.js

Réplica del sitio web de IKOMI Perú, hecha con Next.js, App Router, TypeScript y Tailwind CSS, para el laboratorio de Desarrollo de Aplicaciones Web Avanzado.

* Repositorio: https://github.com/BaudecKOGI/ikomi-next-uceda
* Sitio desplegado: PENDIENTE, aquí va el enlace cuando termine el despliegue

## Requisitos

* Node.js 20.9 o superior
* npm
* Git

## Cómo instalar y ejecutar

1. Clonar el repositorio:

```bash
git clone https://github.com/BaudecKOGI/ikomi-next-uceda.git
cd ikomi-next-uceda
```

2. Instalar las dependencias:

```bash
npm install
```

3. Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

4. Abrir http://localhost:3000 en el navegador.

## Otros comandos

| Comando | Para qué sirve |
| :--- | :--- |
| `npm run dev` | Ejecuta el sitio en modo desarrollo, con recarga automática |
| `npm run build` | Revisa errores y prepara el sitio para producción |
| `npm run start` | Ejecuta el sitio ya construido, hay que correr `npm run build` antes |

## Rutas del sitio

| Ruta | Página |
| :--- | :--- |
| `/` | Inicio |
| `/nosotros` | Nosotros |
| `/servicios` | Servicios |
| `/productos` | Lista de productos |
| `/productos/[slug]` | Detalle de cada producto |
| `/marcas` | Marcas |
| `/contacto` | Contáctenos |
| Cualquier otra | Página 404 personalizada |

## Estructura del proyecto

```
src/
├── app/            Páginas, layout raíz y página 404
├── components/     Navbar, Footer, Hero, ProductCard, SectionTitle y ContactForm
└── data/           Datos de productos y lista de enlaces
public/images/      Imágenes del sitio
evidencias/         Capturas de build, Network y responsive
DECISIONES.md       Decisiones y justificaciones de cada parte
BITACORA_IA.md      Bitácora del uso de IA
```

## Árbol de componentes

```
RootLayout (layout.tsx) - Server
├── Navbar - Client, usa usePathname y useState
├── main
│   ├── Inicio: Hero - Server
│   ├── Nosotros: SectionTitle - Server
│   ├── Servicios: SectionTitle - Server
│   ├── Productos: SectionTitle - Server, ProductCard - Server
│   ├── Producto detalle: Image y Link - Server
│   ├── Marcas: SectionTitle - Server
│   ├── Contacto: SectionTitle - Server, ContactForm - Server
│   └── 404 - Server
└── Footer - Server
```

Solo Navbar es Client Component, porque necesita saber la ruta actual y abrir el menú. Todo lo demás es Server Component.