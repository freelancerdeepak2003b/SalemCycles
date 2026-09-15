import { genericWhatsAppLink } from "../utils/whatsapp";
import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";

export default function CTASection({
  title = "Looking for something else?",
  description = "Can't find the product you're looking for? Send us an enquiry and we'll help you find the right one.",
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <ScrollReveal className="cta-band__inner">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <WhatsAppButton href={genericWhatsAppLink()} size="lg" variant="primary">
            Enquire on WhatsApp
          </WhatsAppButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
