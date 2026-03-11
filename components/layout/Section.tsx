import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      {title ? (
        <Reveal>
          <header className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">{title}</h2>
            {subtitle ? <p className="mt-3 text-zinc-700">{subtitle}</p> : null}
          </header>
        </Reveal>
      ) : null}
      {children}
    </section>
  );
}
