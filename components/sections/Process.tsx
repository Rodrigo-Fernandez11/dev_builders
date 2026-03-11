import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "1. Conversamos",
    description: "Nos contas sobre tu negocio y que necesitas. Te asesoramos sin compromiso.",
  },
  {
    title: "2. Planificamos",
    description: "Te mostramos como va a quedar tu sitio y acordamos precio y tiempo de entrega.",
  },
  {
    title: "3. Creamos",
    description: "Disenamos y desarrollamos tu sitio. Te vamos mostrando avances.",
  },
  {
    title: "4. Lanzamos",
    description: "Dejamos todo funcionando y te ensenamos a usarlo. Quedas listo para vender.",
  },
];

export function Process() {
  return (
    <Section id="process" title="Como trabajamos" subtitle="Simple y claro, sin complicaciones. Asi es nuestro proceso.">
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
