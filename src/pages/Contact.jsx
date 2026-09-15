import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";
import ContactSection from "../components/ContactSection";
import { usePageMeta } from "../hooks/usePageMeta";
import "/src/Contact.css"; // Link the accompanying styles below

const PHONE_NUMBER = "8754941951";
const MAP_URL =
  "https://www.google.com/maps/place/Salem+Cycles/@11.6269369,78.1379215,17z/data=!3m1!4b1!4m6!3m5!1s0x3babef63e13513c9:0x9b511e2b6b14c436!8m2!3d11.6269317!4d78.1405018!16s%2Fg%2F11rm_y9534?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";
const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}`;

export default function Contact() {
  usePageMeta(
    "Contact Us | Salem Cycles",
    "Get in touch with Salem Cycles in Kondalampatti, Salem. Call us, WhatsApp us, or visit our exact location."
  );

  return (
    <>
      {/* Hero Header with Subtle Mesh Glow */}
      <Section tone="dark" className="contact-hero">
        <ScrollReveal as="div" className="contact-hero__inner">
          <div className="contact-badge">
            <span className="contact-badge__pulse" />
            <span className="contact-badge__text">SALEM CYCLES • SUPPORT</span>
          </div>

          <h1 className="contact-hero__title">
            Let’s get your <span className="text-gradient">wheels moving.</span>
          </h1>

          <p className="contact-hero__subtitle">
            Need a test ride, precision tune-up, or genuine spare parts? Reach
            out directly or drop by our showroom.
          </p>
        </ScrollReveal>
      </Section>

      {/* Main Interactive Contact Grid */}
      <Section tone="light" className="contact-content-section">
        <ScrollReveal as="div" className="contact-container">
          <div className="contact-grid">
            
            {/* Phone Card */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="contact-card contact-card--phone"
            >
              <div className="contact-card__icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-card__body">
                <span className="contact-card__tag">DIRECT LINE</span>
                <h3 className="contact-card__heading">+91 87549 41951</h3>
                <p className="contact-card__desc">
                  Instant response for bike reservations, gear checks, and repair estimates.
                </p>
              </div>
              <div className="contact-card__action">
                <span>Call Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card--whatsapp"
            >
              <div className="contact-card__icon-wrapper">
                <svg
  className="contact-icon"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.89L2 22l5.25-1.25A9.94 9.94 0 0 0 12.04 22C17.57 22 22 17.52 22 12S17.57 2 12.04 2Zm0 18.25c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.11.74.75-3.03-.21-.33A8.22 8.22 0 1 1 12.04 20.25Zm4.51-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.52.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.36-.78-1.86-.2-.48-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.42 1.03 2.59c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
</svg>
              </div>
              <div className="contact-card__body">
                <span className="contact-card__tag">WHATSAPP CHAT</span>
                <h3 className="contact-card__heading">Chat with us</h3>
                <p className="contact-card__desc">
                  Drop photos of components you need, ask price ranges, or request catalog PDFs.
                </p>
              </div>
              <div className="contact-card__action">
                <span>Start Chat</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>

            {/* Location Card */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card--map"
            >
              <div className="contact-card__icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-card__body">
                <span className="contact-card__tag">OUR WORKSHOP</span>
                <h3 className="contact-card__heading">Kondalampatti</h3>
                <p className="contact-card__desc">
                  No. 162, Panathankadu, opp. NPR School & AVM Hospital, Salem – 636201.
                </p>
              </div>
              <div className="contact-card__action">
                <span>Open in Maps</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>

            {/* Business Hours Card */}
            <div className="contact-card contact-card--hours">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="contact-card__body">
                <span className="contact-card__tag">SERVICE HOURS</span>
                <h3 className="contact-card__heading">9:00 AM – 9:00 PM</h3>
                <p className="contact-card__desc">
                  Open every day (Monday to Sunday). Mechanics available during all operating hours.
                </p>
              </div>
              <div className="contact-card__badge-status">
                <span className="status-dot"></span> Open Today
              </div>
            </div>

          </div>
        </ScrollReveal>
      </Section>

   
    </>
  );
}     