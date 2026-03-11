import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { packages } from "@/data/packages";

export function Packages() {
  return (
    <Section
      id="packages"
      title="Nuestros planes"
      subtitle="Elegí el plan que mejor se adapta a tu negocio. Todos incluyen diseño profesional y soporte."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <Reveal key={pkg.id} delay={index * 120}>
            <article
              className={`h-full rounded-xl border p-6 transition duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "border-teal-300 bg-teal-50/40 shadow-lg shadow-teal-100/40"
                  : "border-zinc-200 bg-white hover:border-amber-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-900">{pkg.name}</h3>
                {pkg.highlighted ? (
                  <span className="rounded-full bg-teal-700 px-2.5 py-1 text-xs font-semibold text-white">
                    Recomendado
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-zinc-700">{pkg.idealFor}</p>
              <p className="mt-4 text-2xl font-semibold text-zinc-900">{pkg.priceFrom}</p>
              <p className="text-sm text-zinc-600">Tiempo estimado: {pkg.timeline}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-800">
                {pkg.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
