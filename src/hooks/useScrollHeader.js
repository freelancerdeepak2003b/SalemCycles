import { useEffect, useState } from "react";

// Tracks whether the page has been scrolled past a small threshold,
// so the header can switch to its "scrolled" (blurred/shadowed) style.
export function useScrollHeader(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
