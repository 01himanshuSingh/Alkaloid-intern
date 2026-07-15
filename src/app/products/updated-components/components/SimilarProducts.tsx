import { ProductDetail } from "../types/product";

interface SynonymsSectionProps {
  product: ProductDetail;
}

export default function SynonymsSection({ product }: SynonymsSectionProps) {
  const synonymsList = product.synonyms
    ? product.synonyms.split(/[,\n]/).map((s) => s.trim()).filter(Boolean)
    : [];

  if (synonymsList.length === 0) return null;

  return (
    <section aria-labelledby="synonyms-section">
      <h3
        id="synonyms-section"
        className="text-[18px] lg:text-[20px] 2xl:text-[35px] font-[Geologica] font-medium tracking-[0.1em] leading-tight uppercase text-white mb-4"
      >
        Synonyms
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1.5">
        {synonymsList.map((s, i) => (
          <p
            key={i}
            className="text-[13px] lg:text-[15px] 2xl:text-[17px] font-medium font-['Libre_Baskerville'] text-white/90 leading-snug"
          >
            {s}
          </p>
        ))}
      </div>
    </section>
  );
}