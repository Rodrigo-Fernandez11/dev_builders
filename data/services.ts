export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "landing-pages",
    title: "Paginas Web y Landing Pages",
    description:
      "Creamos tu sitio web profesional para que tus clientes te encuentren y confien en tu negocio. Diseño moderno y rapido.",
    bullets: [
      "Diseño atractivo adaptado a tu marca",
      "Optimizada para celulares y computadoras",
      "Carga rapida y facil de actualizar",
    ],
  },
  {
    id: "ecommerce",
    title: "Tiendas Online (E-commerce)",
    description:
      "Lleva tu negocio a internet y vende 24/7. Te armamos tu tienda online completa con carrito de compras y pagos seguros.",
    bullets: [
      "Catalogo de productos facil de gestionar",
      "Carrito de compras y pasarela de pagos",
      "Panel para ver pedidos y ventas",
    ],
  },
  {
    id: "seo",
    title: "Posicionamiento en Google (SEO)",
    description:
      "Que tus clientes te encuentren cuando buscan en Google. Trabajamos para que aparezcas en las primeras posiciones.",
    bullets: [
      "Tu negocio visible en Google Maps y busquedas",
      "Optimizacion de tu sitio para mas visitas",
      "Reportes mensuales de resultados",
    ],
  },
  {
    id: "automation",
    title: "Integracion y Automatizacion",
    description:
      "Conectamos tus herramientas y automatizamos tareas repetitivas para que ahorres tiempo y no pierdas ventas.",
    bullets: [
      "Automatizacion de respuestas y seguimiento",
      "Conexion con WhatsApp, redes y pagos",
      "Notificaciones automaticas de pedidos",
    ],
  },
  {
    id: "maintenance",
    title: "Mantenimiento y Soporte",
    description:
      "Tu sitio siempre funcionando. Nos encargamos de actualizaciones, copias de seguridad y resolver cualquier problema.",
    bullets: [
      "Respaldo de tu sitio cada semana",
      "Actualizaciones de seguridad",
      "Soporte rapido cuando lo necesites",
    ],
  },
];
