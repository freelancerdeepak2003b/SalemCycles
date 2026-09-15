import WhatsAppIcon from "./WhatsAppIcon";

// Reusable, centrally-wired WhatsApp CTA.
// Pass a pre-built `href` (see src/utils/whatsapp.js) — this component
// never touches the phone number directly.
export default function WhatsAppButton({
  href,
  children = "Enquire on WhatsApp",
  variant = "primary", // primary | secondary | ghost | floating
  size = "md", // sm | md | lg
  className = "",
  ariaLabel,
}) {
  const classes = [
    "wa-btn",
    `wa-btn--${variant}`,
    `wa-btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      aria-label={ariaLabel || children}
    >
      <WhatsAppIcon className="wa-btn__icon" />
      <span>{children}</span>
    </a>
  );
}
