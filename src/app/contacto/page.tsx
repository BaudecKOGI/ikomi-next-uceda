import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctenos | IKOMI Perú",
  description: "Escríbenos y un asesor de IKOMI Perú te atenderá.",
};

export default function Contacto() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        titulo="Contáctenos"
        subtitulo="Llene el formulario y un asesor se pondrá en contacto lo más pronto posible."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <iframe
          title="Mapa de la ubicación de IKOMI Perú en Ate, Lima"
          src="https://www.google.com/maps?q=Av.+Nicol%C3%A1s+Ayll%C3%B3n+3384,+Ate&output=embed"
          loading="lazy"
          className="h-80 w-full rounded border-0 lg:h-full"
        />
        <ContactForm />
      </div>
    </section>
  );
}