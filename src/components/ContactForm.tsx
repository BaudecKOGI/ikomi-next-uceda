const campo =
  "w-full rounded border border-gray-300 px-3 py-2 focus:border-ikomi-azul focus:outline-none focus:ring-1 focus:ring-ikomi-azul";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="nombre" className="sr-only">Apellidos y Nombres</label>
      <input id="nombre" type="text" placeholder="Apellidos y Nombres" className={campo} />

      <label htmlFor="telefono" className="sr-only">Teléfono</label>
      <input id="telefono" type="tel" placeholder="Teléfono" className={campo} />

      <label htmlFor="correo" className="sr-only">Correo</label>
      <input id="correo" type="email" placeholder="Correo" className={campo} />

      <label htmlFor="asunto" className="sr-only">Asunto</label>
      <input id="asunto" type="text" placeholder="Asunto" className={campo} />

      <label htmlFor="mensaje" className="sr-only">Mensaje</label>
      <textarea id="mensaje" rows={5} placeholder="Mensaje" className={campo} />

      {/* Solo interfaz: el botón todavía no envía nada */}
      <button
        type="button"
        className="mx-auto rounded bg-ikomi-rojo px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}