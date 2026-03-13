export type WebService = {
  id: string;
  name: string;
  priceFrom: string;
  twoPayments: string;
  summary: string;
  idealFor: string[];
  includes: string[];
  deliveryTime: string;
};

export type SupportPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
};

export const servicesIntro =
  "Creamos sitios web modernos y funcionales para que negocios y profesionales tengan presencia online y puedan conseguir nuevos clientes.";

export const sharedIncludes: string[] = [
  "Diseno moderno y profesional",
  "Adaptacion completa a celulares y tablets",
  "Optimizacion basica de velocidad",
  "Publicacion del sitio web online",
];

export const webServices: WebService[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    priceFrom: "Desde $150.000",
    twoPayments: "2 pagos de $75.000",
    summary:
      "Una pagina web enfocada en promocionar un servicio, producto o campana y lograr una accion concreta.",
    idealFor: ["Promociones", "Campanas de publicidad", "Cursos o eventos", "Captacion de nuevos clientes"],
    includes: [
      "Pagina unica optimizada para conversion",
      "Diseno moderno y profesional",
      "Secciones estrategicas de presentacion y beneficios",
      "Formulario de contacto o boton directo a WhatsApp",
      "Integracion con redes sociales",
    ],
    deliveryTime: "3 a 5 dias",
  },
  {
    id: "web-negocio",
    name: "Pagina Web para Negocio",
    priceFrom: "Desde $280.000",
    twoPayments: "2 pagos de $140.000",
    summary:
      "Un sitio web completo para presentar tu negocio, tus servicios y todas las formas de contacto.",
    idealFor: ["Profesionales independientes", "Restaurantes", "Gimnasios", "Peluquerias", "Negocios locales"],
    includes: [
      "Pagina de inicio",
      "Seccion de servicios o productos",
      "Seccion sobre el negocio",
      "Pagina de contacto",
      "Integracion con Google Maps",
    ],
    deliveryTime: "5 a 10 dias",
  },
  {
    id: "tienda-online",
    name: "Tienda Online",
    priceFrom: "Desde $450.000",
    twoPayments: "2 pagos de $225.000",
    summary:
      "Una tienda para vender por internet con catalogo y proceso de compra para tus clientes.",
    idealFor: [
      "Tiendas de ropa",
      "Emprendimientos",
      "Marcas personales",
      "Negocios que venden productos fisicos",
    ],
    includes: [
      "Catalogo de productos",
      "Carrito de compras",
      "Integracion con medios de pago",
      "Panel basico para gestionar productos",
    ],
    deliveryTime: "7 a 14 dias",
  },
];

export const supportIntro =
  "Todos los proyectos incluyen 1 mes de soporte gratuito despues de la entrega. Luego puedes contratar un plan opcional para seguir con asistencia tecnica y mejoras.";

export const supportPlans: SupportPlan[] = [
  {
    id: "soporte-basico",
    name: "Plan Soporte Basico",
    price: "$20.000 por mes",
    description: "Ideal para quienes quieren asistencia tecnica cuando la necesiten.",
    includes: [
      "Soporte tecnico ante cualquier problema con el sitio",
      "Pequenos cambios de texto o imagenes",
      "Asesoramiento para actualizar tu web",
    ],
  },
  {
    id: "soporte-mejoras",
    name: "Plan Soporte y Mejoras",
    price: "$40.000 por mes",
    description: "Ideal para negocios que quieren seguir mejorando su sitio con el tiempo.",
    includes: [
      "Todo lo del plan basico",
      "Pequenas mejoras en el sitio",
      "Optimizacion de rendimiento",
      "Incorporacion de nuevas secciones simples",
      "Prioridad en soporte",
    ],
  },
];

export const customDevelopmentExamples: string[] = [
  "Sistemas de reservas o turnos",
  "Herramientas internas para empresas",
  "Automatizacion de procesos",
  "Aplicaciones web",
];
