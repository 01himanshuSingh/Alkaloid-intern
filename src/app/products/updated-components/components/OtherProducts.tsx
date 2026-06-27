import SimilarProducts from "./SimilarProducts";
import { ProductDetail } from "../types/product";

interface OtherProductsProps {
  products: ProductDetail[];
  onNavigate: (id: string) => void;
}

export default function OtherProducts({ products, onNavigate }: OtherProductsProps) {
  return (
    <SimilarProducts
      products={products}
      onNavigate={onNavigate}
      label="Other Products"
    />
  );
}
