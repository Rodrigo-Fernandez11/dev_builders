export type CaseStudy = {
  id: string;
  sector: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "tienda-ropa",
    sector: "Tienda de Ropa",
    challenge: "Solo vendia en local fisico y queria llegar a mas clientes.",
    solution:
      "Creamos su tienda online con catalogo de productos, carrito de compras y pagos con Mercado Pago.",
    results: [
      "Duplico sus ventas en 3 meses",
      "Vende mientras el local esta cerrado",
      "Clientes de otras ciudades",
    ],
  },
  {
    id: "gimnasio",
    sector: "Gimnasio Local",
    challenge: "La gente no lo encontraba en Google y perdia clientes.",
    solution:
      "Optimizamos su presencia en Google y creamos su sitio web con informacion clara de servicios y precios.",
    results: [
      "Aparece primero en busquedas locales",
      "+40% consultas por mes",
      "Mas inscripciones cada semana",
    ],
  },
  {
    id: "electrodomesticos",
    sector: "Venta de Electrodomesticos",
    challenge: "Recibia muchas consultas por WhatsApp pero se perdia pedidos.",
    solution:
      "Conectamos su tienda online con WhatsApp para recibir notificaciones automaticas de cada pedido.",
    results: [
      "No pierde ningun pedido",
      "Ahorra 2 horas diarias",
      "Mejor organizacion de ventas",
    ],
  },
];
