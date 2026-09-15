import { useSearchParams } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import { products } from "../data/products";

export default function Cycles() {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type") || "all";

  return (
    <CategoryPage
      title="Cycles"
      intro="City bikes, mountain bikes, road bikes and kids' cycles — built for how you actually ride."
      products={products.cycles}
      metaDescription="Browse cycles at Salem Cycles — city, mountain, road and kids' bicycles. Enquire instantly on WhatsApp for price and availability."
      initialType={type}
    />
  );
}