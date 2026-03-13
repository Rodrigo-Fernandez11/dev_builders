const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5490000000000";
const whatsappMessage = "Hola, quiero una asesoria gratuita para mi proyecto web.";

export const siteConfig = {
  name: "Dev Builders",
  description:
    "Creamos sitios web y tiendas online para negocios y profesionales, con asesoria gratuita para definir la mejor opcion.",
  url: "https://devbuilders.com",
  contactEmail: "hola@devbuilders.com",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
};

export type SiteConfig = typeof siteConfig;
