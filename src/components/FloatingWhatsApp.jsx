import { genericWhatsAppLink } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

// Persistent floating CTA present on every page — WhatsApp enquiry is meant
// to be reachable at all times, not just at the top of the page.
export default function FloatingWhatsApp() {
  return (
    <a
      href={genericWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Enquire on WhatsApp"
    >
      <WhatsAppIcon className="floating-wa__icon" />
    </a>
  );
}
