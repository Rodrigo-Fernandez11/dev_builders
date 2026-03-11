import { Section } from "@/components/layout/Section";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Resultados y confianza"
      subtitle="Empresas que ya escalaron su presencia digital con nuestro equipo."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 140}>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200">
              <p className="text-zinc-800">&quot;{item.quote}&quot;</p>
              <p className="mt-4 text-sm font-semibold text-zinc-900">{item.name}</p>
              <p className="text-sm text-zinc-600">{item.role}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
