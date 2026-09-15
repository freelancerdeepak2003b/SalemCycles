import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { genericWhatsAppLink } from "../utils/whatsapp";

import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";
import HighlightGrid from "../components/HighlightGrid";
import BrandSection from "../components/BrandSection";
import CertificationSection from "../components/CertificationSection";
import CategoryCard from "../components/CategoryCard";
import CTASection from "../components/CTASection";
import WhatsAppButton from "../components/WhatsAppButton";

import { categoryMeta } from "../data/products";
import { usePageMeta } from "../hooks/usePageMeta";

/* =========================
   Hero Section
========================= */

function Hero({ videoSrc = "/images/bg.mp4" }) {
  const videoRef = useRef(null);
  const line1 = "Your Ride";
  const line2 = "Your Rules";
  const charDelay = 0.05;

  useEffect(() => {
    // Guarantees browser autoplay policies are met
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video Layer */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Readability Overlay */}
      <div
        className="hero__backdrop"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(rgba(17, 19, 21, 0.55), rgba(17, 19, 21, 0.75))",
          pointerEvents: "none",
        }}
      />

      {/* Hero Content */}
      <div
        className="container hero__inner"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <p className="hero__kicker">Salem Cycles</p>

        {/* Jumping Headline */}
        <h1 className="hero__headline" aria-label={`${line1} ${line2}`}>
          <span className="jumping-line" aria-hidden="true">
            {line1.split("").map((char, index) => (
              <span
                key={`line1-${index}`}
                className="jump-letter"
                style={{ animationDelay: `${index * charDelay}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

          <br />

          <span className="jumping-line line2" aria-hidden="true">
            {line2.split("").map((char, index) => (
              <span
                key={`line2-${index}`}
                className="jump-letter"
                style={{
                  animationDelay: `${(line1.length + index) * charDelay}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero__sub">
          Engineered for performance, styled for the streets. Explore top-tier
          bikes and accessories curated for riders who refuse to settle for
          ordinary.
        </p>

        {/* Hero Buttons */}
        <div className="hero__actions">
          <WhatsAppButton
            href={genericWhatsAppLink()}
            size="lg"
            variant="primary"
          >
            Enquire on WhatsApp
          </WhatsAppButton>

          <Link to="/cycles" className="btn btn--outline btn--lg">
            Explore Cycles
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================
   About Section (Auto-Slideshow 16:9)
========================= */
function AboutSection() {
  return (
    <Section tone="light" id="about">
      <div
        className="about-background"
        style={{
          position: "relative",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          aspectRatio: "16 / 9",
          minHeight: "480px",
          overflow: "hidden",
          borderRadius: 0,
          background: "#050505",
        }}
      >
        {/* Background Image */}
        <img
          src="/images/about.png"
          alt="Salem Cycles store and cyclist"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "right center",
          }}
        />

        {/* Dark Gradient Overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 38%, rgba(0,0,0,0.62) 65%, rgba(0,0,0,0.20) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "48px 8%",
            boxSizing: "border-box",
          }}
        >
          <ScrollReveal
            as="div"
            className="about-background__content"
            style={{
              maxWidth: "600px",
              color: "#fff",
            }}
          >
            {/* Small Label */}
            <span
              style={{
                display: "inline-block",
                marginBottom: "16px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#E8A33D",
              }}
            >
              About Salem Cycles
            </span>

            {/* Main Heading */}
            <h2
              style={{
                marginBottom: "22px",
                color: "#FFFFFF",
                fontSize: "clamp(32px, 4vw, 58px)",
                lineHeight: 1.05,
                fontWeight: 800,
              }}
            >
              Built for riders.
              <br />
              <span style={{ color: "#E8A33D" }}>
                Trusted by Salem.
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p
              style={{
                marginBottom: "14px",
                lineHeight: 1.7,
                fontSize: "16px",
                color: "#D1D1D1",
                fontWeight: 400,
                maxWidth: "570px",
              }}
            >
              Salem Cycles is a bicycle shop built around one idea: riders
              deserve a straight answer and a bike that actually fits them. We
              stock cycles, accessories and spares for daily commuters, weekend
              riders, young riders just starting out, and anyone in between.
            </p>

            {/* Paragraph 2 */}
            <p
              style={{
                marginBottom: "14px",
                lineHeight: 1.7,
                fontSize: "16px",
                color: "#D1D1D1",
                fontWeight: 400,
                maxWidth: "570px",
              }}
            >
              Every product that leaves our shop is checked before it's handed
              over, and every question is answered by someone who actually
              knows bicycles — not a script.
            </p>

            {/* Paragraph 3 */}
            <p
              style={{
                lineHeight: 1.7,
                fontSize: "16px",
                color: "#D1D1D1",
                fontWeight: 400,
                maxWidth: "570px",
              }}
            >
              Open every day from{" "}
              <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>
                9 AM to 9 PM
              </strong>
              , right here in Salem — walk in, or send us a message on WhatsApp
              first.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}


/* =========================
   Home Page (Default Export)
========================= */

export default function Home() {
  usePageMeta(
    "Salem Cycles | Quality Cycles, Accessories & Spares in Salem",
    "Salem Cycles is a trusted bicycle shop in Salem, Tamil Nadu. Browse cycles, accessories and spares, and enquire instantly on WhatsApp."
  );

  return (
    <>
      {/* HERO */}
      <Hero />

      {/* SHOP BY CATEGORY */}
      <Section tone="light">
        <ScrollReveal as="div" className="section-heading">
          <h2>Explore Your Ride</h2>
          <p>
            From kids’ first rides to everyday commutes and mountain adventures, find the cycle that fits your journey.
          </p>
        </ScrollReveal>

        <div className="category-grid">
          {Object.entries(categoryMeta).map(([key, cat], i) => (
            <ScrollReveal key={key} delay={i * 80}>
              <CategoryCard
                title={cat.title}
                description={cat.description}
                image={cat.image}
                to={cat.to}
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* BRANDS */}
      <BrandSection />

      {/* ABOUT (WITH AUTO-SLIDESHOW) */}
      <AboutSection />

      

      {/* WHY RIDE WITH US */}
      <Section tone="concrete">
        <ScrollReveal as="div" className="section-heading">
          <h2>Why Ride With Us</h2>
          <p>What you get every time you buy from Salem Cycles.</p>
        </ScrollReveal>

        <HighlightGrid />
      </Section>

      

      {/* CTA */}
      <CTASection
        title="Not sure what you need?"
        description="Tell us what kind of riding you do and we'll help you pick the right cycle, accessory or spare part."
      />

      {/* CERTIFICATIONS */}
      <CertificationSection />
    </>
  );
}