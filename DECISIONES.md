# Decisiones de Configuración - Proyecto IKOMI

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| TypeScript | JavaScript | Elegí TypeScript porque en la página de productos voy a crear una tarjeta que reciba datos como el nombre y la descripción. Esto me ayuda a evitar errores al mostrar la información real de IKOMI. |
| Tailwind CSS | CSS Modules o Bootstrap | Elegí Tailwind porque me permite adaptar el diseño del sitio de IKOMI a celulares, tablets y computadoras de forma rápida. Además puedo guardar los colores corporativos de la marca en un solo archivo para que todo se vea uniforme. |
| Carpeta src | Raíz del proyecto | Usé la carpeta src para mantener ordenadas todas las páginas del sitio como nosotros, servicios y contacto. Así separo el código de la empresa de los archivos de configuración del proyecto. |
| App Router | Pages Router | Usé el App Router porque es lo que exige el curso. Me permite tener un diseño compartido para que el menú de navegación y el pie de página de IKOMI se mantengan fijos cuando el usuario cambie de sección. |
| ESLint | Sin linter | Elegí ESLint para mantener el código limpio y evitar errores de escritura. Esto asegura que el sitio web de IKOMI compile perfectamente cuando lo suba a internet para la entrega final. |

## Decisiones de la Parte 2

* **¿Usaría un layout anidado para /productos?** No, lo descarté porque el diseño de la página de lista de productos y el detalle son simples, crear un layout extra solo añadiría archivos innecesarios. El layout raíz con el Navbar y Footer es suficiente para que toda la sección de productos se vea bien.
* **¿Agruparía rutas con route groups?** No, decidí no usar route groups como (marketing) porque el sitio de IKOMI que tenemos en el laboratorio que nos brindo no es tan grande como para necesitar diferentes estructuras visuales por sección, mantener las carpetas normales hace que el enrutamiento sea más fácil de leer y entender.

* **Por qué usé generateStaticParams:** Porque los 3 productos están en un archivo local y no cambian, así las páginas se arman en el build.
* **Por qué quité Cache Components:** Porque no lo necesito en este sitio y chocaba con force-dynamic, por eso el build fallaba.

## Decisiones de la Parte 3

* **Por qué la Navbar es Client Component:** Porque usa usePathname para saber en qué página estoy y useState para abrir y cerrar el menú, y esos hooks solo funcionan en el navegador, por eso lleva `use client`.
* **Por qué el resto puede ser Server Component:** Porque las páginas solo muestran texto e imágenes, no tienen clics ni estado, así el navegador descarga menos JavaScript y el sitio carga más rápido.
* **Enlace activo:** El inicio solo se marca cuando estoy en la ruta /, los demás usan startsWith, por eso dentro de un producto sigue marcado Productos.

### Experimento Link contra a href

* **Con Link:** Al cambiar de página no se recarga todo, evidencia en evidencias/network-link.png.
* **Con a href:** La página se recarga completa, evidencia en evidencias/network-a-href.png.
* **Conclusión:** Link cambia de página sin recargar, por eso se siente más rápido que a href.

## Decisiones de la Parte 4

* **Estrategia de estilos:** Elegí Tailwind CSS, porque me deja hacer el diseño responsive en cada componente con clases como md y lg, sin crear un archivo de estilos por componente como pasaba con CSS Modules, y Bootstrap lo descarté porque trae estilos ya hechos y el sitio de IKOMI quedaría parecido a cualquier otro.
* **Colores y tipografía definidos una sola vez:** Los colores azul, rojo, amarillo y oscuro de IKOMI están en globals.css dentro de theme, y la fuente Raleway está en layout.tsx, así que si cambio un color se cambia en todo el sitio.
* **Beneficio de next/image:** Carga las fotos del tamaño que necesita cada pantalla y las deja para cargar después cuando no se ven, y como tiene ancho y alto definidos la página no salta mientras cargan, algo muy útil en Productos que tiene muchas fotos.
* **Beneficio de next/font:** Descarga la fuente Raleway al hacer el build y la sirve desde el mismo sitio, así el navegador no pide la fuente a Google en cada visita y el texto no cambia de letra cuando termina de cargar.
* **Animación con propósito:** Al pasar el mouse por una tarjeta de producto, la tarjeta sube un poco y la foto se agranda, y con esto el usuario ve que puede hacer clic para entrar al detalle del producto.
* **Componentes reutilizables:** Hice Navbar, Footer, Hero, ProductCard, SectionTitle y ContactForm, y la lista de enlaces está en un solo archivo que usan Navbar y Footer, para no repetirla.
* **Árbol de componentes:** Está en el README.md.