// Generic section shell: consistent max-width, vertical rhythm and
// background tone so every section on the site shares the same grid
// without repeating layout CSS everywhere.
export default function Section({
  id,
  tone = "light", // light | dark | concrete
  className = "",
  containerClassName = "",
  children,
}) {
  return (
    <section id={id} className={`section section--${tone} ${className}`}>
      <div className={`container ${containerClassName}`}>{children}</div>
    </section>
  );
}
