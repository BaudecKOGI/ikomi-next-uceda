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