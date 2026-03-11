import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

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
            Creamos tu presencia digital para que vendas mas y te encuentren en Google.
          </h1>
          <p className="mt-6 max-w-xl text-zinc-700">
            Tiendas online, paginas web y posicionamiento en Google para negocios locales, emprendedores y comercios.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Consultar precio</Button>
            <Button href="#services" variant="ghost">
              Ver servicios
            </Button>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <div className="rounded-xl border border-teal-100 bg-white/90 p-6 shadow-lg shadow-teal-100/30">
            <p className="text-sm font-medium text-teal-800">Que obtienes</p>
            <ul className="mt-4 space-y-3 text-zinc-800">
              <li>✓ Sitio web profesional que funciona en todos los dispositivos</li>
              <li>✓ Mas clientes te encuentran en Google</li>
              <li>✓ Tu negocio abierto 24/7 para vender online</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
