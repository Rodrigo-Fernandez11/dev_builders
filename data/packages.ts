export type Package = {
  id: string;
  name: string;
  idealFor: string;
  timeline: string;
  priceFrom: string;
  features: string[];
  highlighted?: boolean;
};

export const packages: Package[] = [
  {
    id: "web-basico",
    name: "Web Basica",
    idealFor: "Ideal para emprendedores que recien empiezan o negocios locales.",
    timeline: "1 a 2 semanas",
    priceFrom: "Desde $300",
    features: [
      "Pagina web profesional con tu informacion",
      "Diseño adaptado a celulares",
      "Formulario de contacto",
      "Incluye dominio y hosting por 1 año",
    ],
  },
  {
    id: "tienda-online",
    name: "Tienda Online",
    idealFor: "Perfecto para comercios que quieren vender por internet.",
    timeline: "2 a 3 semanas",
    priceFrom: "Desde $800",
    highlighted: true,
    features: [
      "Tienda completa con carrito de compras",
      "Pasarela de pagos integrada",
      "Panel para gestionar productos y pedidos",
      "Capacitacion para que la uses tu mismo",
    ],
  },
  {
    id: "web-completo",
    name: "Paquete Completo",
    idealFor: "Para negocios que quieren destacar y aparecer en Google.",
    timeline: "3 a 4 semanas",
    priceFrom: "Desde $1,200",
    features: [
      "Sitio web profesional o tienda online",
      "Posicionamiento en Google (SEO)",
      "Integracion con WhatsApp y redes sociales",
      "Mantenimiento incluido por 3 meses",
    ],
  },
];
