import { useScrollReveal } from "../hooks/useScrollReveal";

// Generic wrapper: fades/slides its children in once they enter the
// viewport. One consistent motion treatment used sparingly, not stacked
// with a different animation on every element.
export default function ScrollReveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
}) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "reveal--visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
