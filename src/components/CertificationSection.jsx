import ScrollReveal from "./ScrollReveal";
import Section from "./Section";

export default function CertificationSection() {
  const certificates = [
    "/images/Certificate1.png",
    "/images/Certificate1.png",
    "/images/Certificate1.png",
  ];

  return (
    <Section tone="concrete" id="trust">
      <ScrollReveal
        as="div"
        className="section-heading section-heading--dark"
      >
        <h2>Our Certifications</h2>
        <p>Quality and standards you can trust.</p>
      </ScrollReveal>

      <div className="cert-grid">
        {certificates.map((image, i) => (
          <ScrollReveal
            as="div"
            key={`${image}-${i}`}
            delay={i * 80}
            className="cert-card"
          >
            <img
              src={image}
              alt={`Certificate ${i + 1}`}
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}