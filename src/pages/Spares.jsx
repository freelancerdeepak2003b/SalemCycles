import CategoryPage from "./CategoryPage";
import { products } from "../data/products";

export default function Spares() {
  return (
    <CategoryPage
      title="Spares"
      intro="Genuine replacement parts — chains, brakes, tubes and more — to keep your bicycle running right."
      products={products.spares}
      metaDescription="Find genuine bicycle spare parts at Salem Cycles — chains, brakes, tubes and more. Enquire instantly on WhatsApp."
    />
  );
}
