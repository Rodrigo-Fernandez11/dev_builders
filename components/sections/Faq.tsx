import { Section } from "@/components/layout/Section";
import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  return (
    <Section id="faq" title="Preguntas frecuentes">
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <Reveal key={item.question} delay={index * 120}>
            <details className="rounded-lg border border-zinc-200 bg-white p-5 transition duration-300 hover:border-amber-200">
              <summary className="cursor-pointer font-medium text-zinc-900">{item.question}</summary>
              <p className="mt-3 text-zinc-700">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
