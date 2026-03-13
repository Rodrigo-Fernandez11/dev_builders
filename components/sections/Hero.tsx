import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-200 bg-linear-to-b from-amber-50 via-orange-50 to-white"
    >
      <div className="float-soft absolute -left-20 top-12 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="float-soft absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-amber-300/35 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:px-10 md:py-24">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">
            Tu negocio merece estar online
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Creamos sitios web modernos para que tu negocio venda mas y genere confianza.
          </h1>
          <p className="mt-6 max-w-xl text-zinc-700">
            Te ayudamos a elegir la mejor opcion con una asesoria gratuita y un plan claro segun tu presupuesto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.whatsappUrl}>Asesoria gratuita por WhatsApp</Button>
            <Button href="#services" variant="ghost">
              Ver servicios
            </Button>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <div className="rounded-xl border border-teal-100 bg-white/90 p-6 shadow-lg shadow-teal-100/30">
            <p className="text-sm font-medium text-teal-800">Que obtienes</p>
            <ul className="mt-4 space-y-3 text-zinc-800">
              <li>✓ Asesoria gratuita para definir la mejor solucion digital</li>
              <li>✓ Presupuesto claro con modalidad de pago en 2 partes</li>
              <li>✓ Acompanamiento desde la idea hasta la publicacion del sitio</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
