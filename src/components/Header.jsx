import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../config/site";
import { genericWhatsAppLink } from "../utils/whatsapp";
import { useScrollHeader } from "../hooks/useScrollHeader";
import WhatsAppButton from "./WhatsAppButton";

import logo from "/images/logo.png";

export default function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the viewport is resized back to desktop.
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 860) setMenuOpen(false);
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      <div className="container site-header__inner">

        {/* Logo */}
        <NavLink
          to="/"
          className="site-logo"
          onClick={() => setMenuOpen(false)}
          aria-label="Salem Cycles Home"
        >
          <img
            src={logo}
            alt="Salem Cycles"
            className="site-logo__image"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `site-nav__link ${
                  isActive ? "site-nav__link--active" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="site-header__cta">
          <WhatsAppButton
            href={genericWhatsAppLink()}
            variant="primary"
            size="sm"
          >
            Enquire Now
          </WhatsAppButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`hamburger ${
            menuOpen ? "hamburger--open" : ""
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`mobile-nav ${
          menuOpen ? "mobile-nav--open" : ""
        }`}
      >
        <nav className="mobile-nav__links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-nav__link ${
                  isActive ? "mobile-nav__link--active" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <WhatsAppButton
          href={genericWhatsAppLink()}
          variant="primary"
          size="lg"
          className="mobile-nav__cta"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  );
}