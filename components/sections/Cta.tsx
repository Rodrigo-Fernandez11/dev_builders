import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function Cta() {
  return (
    <Section id="contact" title="Asesoria gratuita para tu proyecto web">
      <Reveal>
        <div className="rounded-2xl border border-teal-900/30 bg-linear-to-r from-zinc-900 via-zinc-800 to-teal-900 p-8 text-white">
          <p className="max-w-2xl text-zinc-100">
            Cuentanos tu idea por WhatsApp y te ayudamos a elegir la mejor solucion para tu negocio. La asesoria inicial es gratuita.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={siteConfig.whatsappUrl} variant="light">
              Hablar por WhatsApp
            </Button>
            <Button href={`mailto:${siteConfig.contactEmail}`} variant="lightGhost">
              Escribir por email
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
