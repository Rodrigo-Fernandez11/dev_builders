import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import {
  customDevelopmentExamples,
  servicesIntro,
  sharedIncludes,
  supportGuarantee,
  supportIntro,
  supportPlans,
  supportReasons,
  webServices,
} from "@/data/services";

export function Services() {
  return (
    <Section
      id="services"
      title="Servicios de Desarrollo Web"
      subtitle="Soluciones modernas para que tu negocio tenga presencia profesional en internet y consiga nuevos clientes."
    >
      <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-br from-amber-50 via-white to-teal-50 px-6 py-8 shadow-[0_30px_80px_-40px_rgba(12,74,110,0.35)] sm:px-8">
        <div className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-200/50 blur-3xl" />
        <Reveal>
          <div className="relative rounded-2xl border border-zinc-900/10 bg-zinc-900 p-6 text-zinc-50 sm:p-8">
            <div className="inline-flex items-center rounded-full border border-amber-200/60 bg-amber-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
              Desarrollo Web Profesional
            </div>
            <p className="mt-4 max-w-3xl text-zinc-100">{servicesIntro}</p>

            <h3 className="mt-7 text-lg font-semibold text-white">Todos nuestros sitios incluyen</h3>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-100 sm:grid-cols-2">
              {sharedIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 inline-flex rounded-xl border border-teal-200/20 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
              Modalidad de pago en 2 partes: 50% al iniciar y 50% al entregar.
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {webServices.map((service, index) => (
          <Reveal key={service.id} delay={index * 110}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_18px_45px_-35px_rgba(24,24,27,0.8)] transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_25px_55px_-30px_rgba(13,148,136,0.45)]">
              <div className="absolute -right-14 -top-14 h-28 w-28 rounded-full bg-linear-to-br from-amber-100 to-teal-100 opacity-70 transition duration-300 group-hover:scale-110" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-zinc-900">{service.name}</h3>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-2xl font-semibold text-zinc-900">{service.priceFrom}</p>
                  <span className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">
                    {service.twoPayments}
                  </span>
                </div>

                <h4 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Que es</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{service.summary}</p>

                <h4 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Ideal para</h4>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-800">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Que incluye</h4>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-800">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-800">
                  Tiempo de entrega: {service.deliveryTime}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-3xl border border-teal-200/80 bg-linear-to-br from-teal-50 via-white to-emerald-50 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl font-semibold text-zinc-900">Soporte y mantenimiento web (Opcional)</h3>
            <span className="rounded-full border border-teal-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              1 mes gratis incluido
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-zinc-700">{supportIntro}</p>
          <p className="mt-3 rounded-xl border border-teal-200/80 bg-white px-4 py-3 text-sm font-medium text-teal-900">
            {supportGuarantee}
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {supportReasons.map((reason) => (
              <p key={reason} className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800">
                {reason}
              </p>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {supportPlans.map((plan) => (
              <article key={plan.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_12px_35px_-30px_rgba(24,24,27,0.9)]">
                <h4 className="text-lg font-semibold text-zinc-900">{plan.name}</h4>
                <p className="mt-2 text-xl font-semibold text-zinc-900">{plan.price}</p>
                <p className="mt-2 text-sm text-zinc-700">{plan.description}</p>
                <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-900">
                  {plan.valueProposition}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-zinc-800">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Button href={siteConfig.whatsappUrl} variant="ghost">
                    Quiero este plan
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_18px_45px_-35px_rgba(24,24,27,0.8)] sm:p-8">
            <h3 className="text-2xl font-semibold text-zinc-900">Desarrollo personalizado</h3>
            <p className="mt-3 text-zinc-700">
            Si tu proyecto necesita algo especifico, tambien realizamos desarrollos a medida segun tus necesidades.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-zinc-800 sm:grid-cols-2">
              {customDevelopmentExamples.map((example) => (
                <li key={example} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                  {example}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium text-zinc-900">
              En estos casos, el presupuesto se calcula segun el alcance y complejidad del proyecto.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-900/10 bg-linear-to-br from-zinc-900 via-zinc-900 to-teal-900 p-6 text-white shadow-[0_22px_60px_-35px_rgba(15,118,110,0.8)] sm:p-8">
            <h3 className="text-2xl font-semibold">Listo para crear tu sitio web?</h3>
            <p className="mt-3 text-zinc-100">
              Si tienes una idea o necesitas asesoramiento, te ayudamos a encontrar la mejor solucion para tu negocio.
            </p>
            <p className="mt-4 text-sm text-zinc-200">
              Incluye una asesoria gratuita inicial para definir alcance, plazos y presupuesto.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={siteConfig.whatsappUrl} variant="light">
                Hablar por WhatsApp
              </Button>
              <Button href="#contact" variant="light">
                Solicitar presupuesto
              </Button>
            </div>
          </article>
        </div>
      </Reveal>
    </Section>
  );
}
