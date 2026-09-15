import { SITE } from "../config/site";

// Builds a wa.me link with a correctly URL-encoded, pre-filled message.
// Centralising this means every "Enquire on WhatsApp" button in the app
// generates its message the exact same way, from the one WhatsApp number
// configured in src/config/site.js.
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}

export function buildProductEnquiryMessage(product) {
  const featureLines = product.features.map((f) => `- ${f}`).join("\n");
  return [
    `Hello ${SITE.name},`,
    "",
    "I am interested in the following product:",
    "",
    `Product: ${product.name}`,
    `Price: ₹${product.d_price}`,
    "",
    "Features:",
    featureLines,
    "",
    "Please provide more details and availability.",
    "",
    "Thank you.",
  ].join("\n");
}

export function buildGenericEnquiryMessage() {
  return [
    `Hello ${SITE.name},`,
    "",
    "I am looking for a bicycle/product.",
    "",
    "Please help me with the available options.",
    "",
    "Thank you.",
  ].join("\n");
}

export function buildContactEnquiryMessage() {
  return `Hello ${SITE.name}, I would like to know more about your shop and products.`;
}

export function productWhatsAppLink(product) {
  return buildWhatsAppLink(buildProductEnquiryMessage(product));
}

export function genericWhatsAppLink() {
  return buildWhatsAppLink(buildGenericEnquiryMessage());
}

export function contactWhatsAppLink() {
  return buildWhatsAppLink(buildContactEnquiryMessage());
}

export { buildWhatsAppLink };
