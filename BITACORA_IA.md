# Bitácora de Uso de Inteligencia Artificial

## Entrada 1: Configuración inicial y resolución de problemas con GitHub
* **Objetivo:** Crear el proyecto base en Next.js, configurar las herramientas y subir el primer avance a GitHub desde una Mac.
* **Prompt utilizado:** "Necesito ayuda para crear mi proyecto Next.js para el examen. Uso una Mac y no tengo configurado GitHub en la terminal. ¿Qué comandos uso y cómo justifico mis decisiones?"
* **Resumen de la respuesta:** La IA me dio el comando para crear el proyecto con TypeScript y Tailwind. También me explicó cómo autenticarme en GitHub usando un Token de acceso personal, ya que mi terminal tenía guardada otra cuenta y me daba error 403. Por último, me ayudó a redactar el archivo DECISIONES.md.
* **Decisión tomada:** Aceptado con modificaciones.
* **Justificación:** Acepté los comandos de terminal porque funcionaron. Sin embargo, modifiqué los textos del archivo DECISIONES.md para que sonaran más naturales y con mis propias palabras, asegurándome de que las justificaciones mencionen el sitio corporativo de IKOMI tal como pide la rúbrica.

## Entrada 2: Identidad de Git en mi laptop
* **Objetivo:** Clonar el proyecto en mi laptop Windows y arreglar que mis commits salían con otro autor.
* **Prompt utilizado:** "Mis commits salen como brayan10 aunque puse bien mis credenciales, ¿qué hago?"
* **Resumen de la respuesta:** La IA explicó que las credenciales sirven para el push, pero el autor sale de user.name y user.email guardados en cada commit.
* **Decisión tomada:** Aceptado.
* **Justificación:** Lo comprobé con git log y vi que el correo de los commits era el viejo.

## Entrada 3: Error de build con force-dynamic (error de la IA #1)
* **Objetivo:** Que el build pasara en Render.
* **Prompt utilizado:** "El despliegue falla en la ruta [slug], ¿qué hago?"
* **Resumen de la respuesta:** Una IA me hizo agregar `export const dynamic = 'force-dynamic'`, pero con Cache Components activado el build fallaba.
* **Decisión tomada:** Modificado.
* **Justificación:** Antes: `force-dynamic` en la página. Después: lo quité y usé `generateStaticParams`, porque mis 3 productos están en un archivo local y no cambian.

## Entrada 4: Configuración incorrecta de next.config.ts (error de la IA #2)
* **Objetivo:** Arreglar el build que seguía fallando.
* **Prompt utilizado:** "Me sale que partialPrefetching requiere cacheComponents."
* **Resumen de la respuesta:** El `next.config.ts` tenía `partialPrefetching` y un loader `@tailwindcss/turbopack` que no corresponden a este proyecto.
* **Decisión tomada:** Rechazado.
* **Justificación:** Antes: configuración con loader de Turbopack. Después: `next.config.ts` vacío y Tailwind con `@tailwindcss/postcss` y `postcss.config.mjs`, que es lo correcto para Next.js.

## Entrada 5: Navbar con enlace activo y menú responsive
* **Objetivo:** Crear la Navbar de la Parte 3.
* **Prompt utilizado:** "Hazme la barra de navegación con Link, enlace activo y menú hamburguesa."
* **Resumen de la respuesta:** La IA propuso un componente con "use client", `usePathname` y `useState`.
* **Decisión tomada:** Aceptado con modificaciones.
* **Justificación:** Entendí para qué sirve cada hook y comprobé el enlace activo y el menú en celular. [Escribe aquí qué cambiaste tú, si cambiaste algo.]