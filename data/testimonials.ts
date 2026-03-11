export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mariana R.",
    role: "Founder - Ecommerce",
    quote:
      "Pasamos de una pagina linda a una maquina de captacion. Hoy nuestro equipo comercial recibe leads mucho mas calificados.",
  },
  {
    name: "Diego P.",
    role: "CEO - SaaS",
    quote:
      "Combinamos SEO y desarrollo para reducir dependencia de ads. En menos de 4 meses crecimos fuerte en pipeline organico.",
  },
  {
    name: "Valentina C.",
    role: "Head of Marketing - Servicios B2B",
    quote:
      "Lo mejor fue la claridad del proceso: objetivos, roadmap, ejecucion y metricas. Sabes exactamente que se esta construyendo y por que.",
  },
];
