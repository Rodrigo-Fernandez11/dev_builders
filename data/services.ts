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
  valueProposition: string;
  includes: string[];
};

export const servicesIntro =
  "Creamos sitios web modernos y funcionales para que negocios y profesionales tengan presencia online y puedan conseguir nuevos clientes.";

export const sharedIncludes: string[] = [
  "Diseno moderno y profesional",
  "Adaptacion completa a celulares y tablets",
  "Optimizacion basica de velocidad",
  "Publicacion del sitio web online",
  "Dominio y hosting incluidos por 1 ano",
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
  "Tu web no termina cuando se publica: necesita ajustes, seguimiento y mejoras para seguir generando resultados. Con soporte, evitas caidas, ahorras tiempo y mantienes una imagen profesional frente a tus clientes.";

export const supportReasons: string[] = [
  "Evitas perder ventas por errores o caidas del sitio",
  "Resuelves cambios urgentes sin frenar tu operacion",
  "Mantienes tu web actualizada para seguir convirtiendo",
  "Tienes ayuda tecnica de confianza sin contratar personal interno",
];

export const supportGuarantee =
  "Todos los proyectos incluyen 1 mes de soporte gratuito despues de la entrega para acompanarte en el arranque, junto con configuracion inicial de hosting y dominio.";

export const supportPlans: SupportPlan[] = [
  {
    id: "soporte-basico",
    name: "Plan Soporte Basico",
    price: "$20.000 por mes",
    description: "Ideal para mantener tu sitio estable y contar con ayuda tecnica cuando aparezca cualquier problema.",
    valueProposition: "Tranquilidad mensual: tu web sigue funcionando y tu negocio no se detiene.",
    includes: [
      "Soporte tecnico ante cualquier problema con el sitio",
      "Pequenos cambios de texto o imagenes",
      "Asesoramiento para actualizar tu web",
      "Acompanamiento en renovacion de hosting y dominio",
      "Respuesta prioritaria en consultas de soporte",
    ],
  },
  {
    id: "soporte-mejoras",
    name: "Plan Soporte y Mejoras",
    price: "$40.000 por mes",
    description: "Ideal para negocios que quieren escalar resultados y mejorar su web de forma continua.",
    valueProposition: "No solo mantienes tu sitio: lo mejoras mes a mes para vender mas.",
    includes: [
      "Todo lo del plan basico",
      "Pequenas mejoras en el sitio",
      "Optimizacion de rendimiento",
      "Incorporacion de nuevas secciones simples",
      "Monitoreo preventivo de disponibilidad del hosting",
      "Prioridad alta en soporte y mejoras",
    ],
  },
];

export const customDevelopmentExamples: string[] = [
  "Sistemas de reservas o turnos",
  "Herramientas internas para empresas",
  "Automatizacion de procesos",
  "Aplicaciones web",
];
