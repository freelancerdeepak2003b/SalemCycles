import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <p>New products are being added soon. Enquire on WhatsApp for current stock.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product, i) => (
        <ScrollReveal key={product.id} delay={(i % 4) * 60}>
          <ProductCard product={product} />
        </ScrollReveal>
      ))}
    </div>
  );
}
