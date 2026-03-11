import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
  return (
    <Section
      id="cases"
      title="Proyectos que funcionan"
      subtitle="Asi ayudamos a negocios como el tuyo a crecer con presencia digital."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Reveal key={study.id} delay={index * 120}>
            <article className="h-full rounded-xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{study.sector}</p>
              <p className="mt-4 text-sm text-zinc-700">
                <span className="font-semibold text-zinc-900">Reto:</span> {study.challenge}
              </p>
              <p className="mt-3 text-sm text-zinc-700">
                <span className="font-semibold text-zinc-900">Solucion:</span> {study.solution}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-800">
                {study.results.map((result) => (
                  <li key={result}>- {result}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
