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

## Decisiones de la Parte 3

* **¿Por qué Navbar es Client Component?** Porque usa `usePathname` para saber en qué página estoy y resaltar el enlace, y `useState` para abrir y cerrar el menú hamburguesa. Esos hooks solo funcionan en el navegador, por eso lleva "use client".
* **¿Por qué el resto puede ser Server Component?** Páginas como Nosotros o Servicios solo muestran texto e imágenes, sin clics ni estado. Así se arman en el servidor y el navegador descarga menos JavaScript, y el sitio de IKOMI carga más rápido.
* **Enlace activo:** el inicio ("/") solo se marca cuando estoy exactamente en "/". Los demás usan `startsWith`, así que en /productos/laptop-pro sigue resaltado "Productos".

### Experimento Link vs <a>
* Con `Link`: al navegar no aparece una petición de tipo Document, la página no se recarga y solo se piden pocos datos. (Captura: evidencias/network-link.png)
* Con `<a href>`: aparece una petición Document, la página se recarga completa y se vuelven a descargar JS y CSS. (Captura: evidencias/network-a-href.png)
* Conclusión: `Link` navega sin recargar y precarga las rutas, por eso se siente más rápido que `<a>`.