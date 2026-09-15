import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page Not Found | Salem Cycles", "This page could not be found.");

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <h1>404</h1>
        <p>We couldn't find that page.</p>
        <Link to="/" className="btn btn--outline">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
