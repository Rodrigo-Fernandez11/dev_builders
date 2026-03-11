import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <Section
      id="services"
      title="Que hacemos por tu negocio"
      subtitle="Soluciones digitales completas para que vendas mas y te encuentren facilmente."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 120}>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200">
              <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
              <p className="mt-3 text-zinc-700">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-800">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
