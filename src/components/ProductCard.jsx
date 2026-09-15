import { productWhatsAppLink } from "../utils/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product }) {
  // Convert price safely
  const getPrice = (price) => {
    return (
      parseFloat(
        String(price)
          .replace(/₹/g, "")
          .replace(/,/g, "")
          .trim()
      ) || 0
    );
  };

  const mrp = getPrice(product.mrp_price);
  const dPrice = getPrice(product.d_price);

  // Calculate discount percentage
  const discountPercentage =
    mrp > dPrice
      ? Math.round(((mrp - dPrice) / mrp) * 100)
      : 0;

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">

        {/* Type Tag */}
        {product.type && (
          <span className="product-card__type-tag">
            {product.type}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-card__image"
        />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>

        <div className="product-card__pricing">
          <span className="product-card__mrp">
            ₹{product.mrp_price}
          </span>

          <span className="product-card__discount-price">
            ₹{product.d_price}
          </span>

          {discountPercentage > 0 && (
            <span className="product-card__discount-percent">
              <span className="discount-desktop">
                {discountPercentage}% OFF
              </span>

              <span className="discount-mobile">
                {discountPercentage}%
              </span>
            </span>
          )}
        </div>

        <ul className="product-card__features">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <WhatsAppButton
          href={productWhatsAppLink(product)}
          variant="primary"
          size="sm"
          className="product-card__cta"
          ariaLabel={`Enquire about ${product.name} on WhatsApp`}
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}