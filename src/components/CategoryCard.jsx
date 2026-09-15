import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, to }) {
  return (
    <Link to={to} className="category-card">
      <div className="category-card__image-wrap">
        <img src={image} alt={title} loading="lazy" className="category-card__image" />
      </div>
      <div className="category-card__body">
        <h3>{title}</h3>
        <span className="category-card__cta">
          Explore
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
