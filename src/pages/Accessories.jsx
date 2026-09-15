import CategoryPage from "./CategoryPage";
import { products } from "../data/products";

export default function Accessories() {
  return (
    <CategoryPage
      title="Accessories"
      intro="Helmets, lights, mounts and gear to make every ride safer and more comfortable."
      products={products.accessories}
      metaDescription="Shop cycling accessories at Salem Cycles — helmets, lights, bags and more. Enquire instantly on WhatsApp for price and availability."
    />
  );
}
