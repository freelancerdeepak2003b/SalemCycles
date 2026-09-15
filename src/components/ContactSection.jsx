import { SITE } from "../config/site";
import { contactWhatsAppLink } from "../utils/whatsapp";
import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    SITE.mapQuery
  )}&output=embed`;

  return (
    <div className="contact-grid">
      <ScrollReveal as="div" className="contact-card">
        <h2>Visit or Reach Us</h2>

        <dl className="contact-details">
          <div>
            <dt>Address</dt>
            <dd>
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.line3}
            </dd>
          </div>
          <div>
            <dt>Phone / WhatsApp</dt>
            <dd>
              <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
            </dd>
          </div>
          <div>
            <dt>Business Hours</dt>
            <dd>
              {SITE.hours.map((h) => (
                <span key={h.days} className="contact-hours-row">
                  {h.days}: {h.time}
                </span>
              ))}
            </dd>
          </div>
          {SITE.email && (
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
          )}
        </dl>

        <WhatsAppButton href={contactWhatsAppLink()} size="lg" variant="primary">
          Enquire on WhatsApp
        </WhatsAppButton>
      </ScrollReveal>

      <ScrollReveal as="div" delay={100} className="contact-map">
        <iframe
          title="Salem Cycles location"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </ScrollReveal>
    </div>
  );
}
