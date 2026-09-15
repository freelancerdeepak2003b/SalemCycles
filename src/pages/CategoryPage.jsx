import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "../components/Section";
import ScrollReveal from "../components/ScrollReveal";
import ProductGrid from "../components/ProductGrid";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

// Splits text into animated bouncy jumping letters
function JumpingTitle({ text }) {
  return (
    <span className="jumping-text" aria-label={text}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="jump-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

// Convert d_price into a proper number
function getPrice(price) {
  if (typeof price === "number") {
    return price;
  }

  if (!price) {
    return 0;
  }

  const cleanedPrice = String(price)
    .replace(/[₹,\s]/g, "")
    .replace(/[^\d.]/g, "");

  return parseFloat(cleanedPrice) || 0;
}

export default function CategoryPage({
  title,
  intro,
  products,
  metaDescription,
  initialType = "all",
}) {
  usePageMeta(`${title} | Salem Cycles`, metaDescription);

  const [searchParams, setSearchParams] = useSearchParams();
  const [sortLowToHigh, setSortLowToHigh] = useState(false);

  // Convert URL type into the actual product type
  const getInitialType = () => {
    const urlType = searchParams.get("type") || initialType;

    if (!urlType || urlType.toLowerCase() === "all") {
      return "All";
    }

    const matchingType = products.find(
      (product) =>
        product.type?.toLowerCase() === urlType.toLowerCase()
    )?.type;

    return matchingType || "All";
  };

  const [selectedType, setSelectedType] = useState(getInitialType);

  // Get unique type values from products
  const types = [
    "All",
    ...new Set(
      products
        .map((product) => product.type)
        .filter(Boolean)
    ),
  ];

  // Handle type filter + update URL
  const handleTypeChange = (type) => {
    setSelectedType(type);

    if (type === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        type: type.toLowerCase(),
      });
    }
  };

  // Filter by selected type
  const filteredProducts =
    selectedType === "All"
      ? products
      : products.filter(
        (product) =>
          product.type?.toLowerCase() ===
          selectedType.toLowerCase()
      );

  // Sort filtered products by d_price
  const displayedProducts = sortLowToHigh
    ? [...filteredProducts].sort((a, b) => {
      return getPrice(a.d_price) - getPrice(b.d_price);
    })
    : filteredProducts;

  return (
    <div className="page-wrapper">

      {/* Header */}
      <Section tone="dark" className="page-header">
        <ScrollReveal
          as="div"
          className="page-header__inner"
        >
          {/* Left: Title + Intro */}
          <div className="page-header__content">
            <h1>
              <JumpingTitle text={title} />
            </h1>

            <p className="fade-in-intro">
              {intro}
            </p>
          </div>

          {/* Right: Cycling Illustration */}
          <div className="page-header__visual" aria-hidden="true">
            <img
              src="/images/cycling.svg"
              alt=""
            />
          </div>
        </ScrollReveal>
      </Section>

      {/* Products */}
      <Section tone="light">

        {/* Filter / Sort Bar */}
        <div className="product-sort-bar">

          {/* Type Filter */}
          <div className="product-type-filter">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                className={`sort-button ${selectedType === type
                    ? "sort-button--active"
                    : ""
                  }`}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Price Sort */}
          <button
            type="button"
            className={`sort-button ${sortLowToHigh
                ? "sort-button--active"
                : ""
              }`}
            onClick={() =>
              setSortLowToHigh((current) => !current)
            }
          >
            {sortLowToHigh
              ? "✓ Price: Low to High"
              : "Sort: Price Low to High"}
          </button>

        </div>

        <ProductGrid products={displayedProducts} />

      </Section>

      {/* CTA */}
      <div>
        <CTASection />
      </div>

    </div>
  );
}