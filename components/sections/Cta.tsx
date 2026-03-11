import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Cta() {
  return (
    <Section id="contact" title="Empeza hoy a vender online">
      <Reveal>
        <div className="rounded-2xl border border-teal-900/30 bg-linear-to-r from-zinc-900 via-zinc-800 to-teal-900 p-8 text-white">
          <p className="max-w-2xl text-zinc-100">
            Contactanos y te hacemos un presupuesto personalizado sin compromiso. Es gratis y en menos de 24 horas te respondemos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="mailto:hola@devbuilders.com" variant="light">
              Solicitar presupuesto
            </Button>
            <Button href="#top" variant="lightGhost">
              Volver arriba
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
