export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Cuanto cuesta hacer mi sitio web?",
    answer:
      "Depende de lo que necesites. Una pagina web basica arranca desde $300, una tienda online desde $800. Te hacemos un presupuesto sin compromiso.",
  },
  {
    question: "Cuanto tiempo tarda?",
    answer:
      "Una pagina web simple toma 1 a 2 semanas. Una tienda online puede tomar de 2 a 3 semanas. Te mantenemos informado todo el tiempo.",
  },
  {
    question: "Necesito conocimientos tecnicos para usar mi sitio?",
    answer:
      "No. Todo esta hecho para que sea facil de usar. Ademas te damos una capacitacion para que puedas agregar productos, fotos o hacer cambios tu mismo.",
  },
  {
    question: "El dominio y hosting estan incluidos?",
    answer:
      "Si, en nuestros paquetes basicos incluimos dominio (.com o .com.ar) y hosting por el primer año. Despues tiene un costo anual muy economico.",
  },
  {
    question: "Que pasa si tengo un problema con mi sitio?",
    answer:
      "Ofrecemos soporte y mantenimiento. Si contratas un paquete con mantenimiento incluido, resolvemos cualquier problema rapido. Sino, podes contratar soporte cuando lo necesites.",
  },
  {
    question: "Puedo vender con Mercado Pago o transferencia?",
    answer:
      "Si, integramos Mercado Pago, transferencias bancarias, o el medio de pago que uses. Tus clientes pagan seguro y vos recibes el dinero directo.",
  },
];
