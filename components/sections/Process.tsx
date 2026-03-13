import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "1. Asesoria gratuita",
    description: "Nos cuentas tu idea, objetivos y presupuesto. Te orientamos sin costo ni compromiso.",
  },
  {
    title: "2. Propuesta clara",
    description: "Definimos el tipo de sitio ideal para tu negocio, alcance, precio y tiempos de entrega.",
  },
  {
    title: "3. Diseno y desarrollo",
    description: "Construimos tu sitio y te mostramos avances para validar que todo quede como esperas.",
  },
  {
    title: "4. Publicacion y soporte",
    description: "Publicamos tu web, dejamos todo funcionando y te acompanamos en el primer mes.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      title="Como trabajamos"
      subtitle="Un proceso simple para que avances con claridad desde la asesoria inicial hasta la publicacion."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 120}>
            <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-200">
              <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-zinc-700">{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
