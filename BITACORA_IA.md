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

## Entrada 3: Error de build con force-dynamic, error de la IA número 1

* **Objetivo:** Que el build pasara en Render.
* **Prompt utilizado:** Pegué el error del despliegue de Render y pregunté qué hacer.
* **Resumen de la respuesta:** La IA explicó que export const dynamic no es compatible con Cache Components y propuso quitarlo y usar generateStaticParams.
* **Decisión tomada:** Aceptado.
* **Justificación:** Antes tenía force-dynamic en la página de producto, después lo quité y usé generateStaticParams, porque mis 3 productos están en un archivo local y no cambian.

## Entrada 4: Configuración incorrecta de next.config.ts, error de la IA número 2

* **Objetivo:** Arreglar el build que seguía fallando.
* **Prompt utilizado:** Pegué mi next.config.ts y el error que decía que partialPrefetching necesita cacheComponents.
* **Resumen de la respuesta:** La IA dijo que partialPrefetching necesita cacheComponents, que yo ya no usaba, y que el loader de turbopack para Tailwind no era el correcto, porque Tailwind se conecta con PostCSS.
* **Decisión tomada:** Aceptado.
* **Justificación:** Antes tenía partialPrefetching y el loader de turbopack, después dejé next.config.ts vacío y creé postcss.config.mjs con @tailwindcss/postcss.

## Entrada 5: Navbar con enlace activo y menú responsive

* **Objetivo:** Crear la barra de navegación de la Parte 3.
* **Prompt utilizado:** Pedí la barra de navegación con Link, enlace activo y menú hamburguesa.
* **Resumen de la respuesta:** La IA me dio un componente Navbar con `use client`, usePathname para el enlace activo y useState para abrir el menú.
* **Decisión tomada:** Aceptado.
* **Justificación:** Cumple los puntos 3.1 a 3.3, y entendí que usePathname da la ruta actual y que useState abre y cierra el menú.

## Entrada 6: Página de inicio sin export default, error de la IA número 3

* **Objetivo:** Agregar metadata a cada página.
* **Prompt utilizado:** Pasé mis páginas y pedí la metadata de cada una.
* **Resumen de la respuesta:** La IA me dijo que agregara la metadata arriba del export default de page.tsx sin haber visto mi archivo, y el archivo quedó sin export default, entonces el build falló con el error Property default is missing.
* **Decisión tomada:** Modificado.
* **Justificación:** Antes page.tsx no tenía el componente, después puse el archivo completo con la metadata y la función Home.