import { ProductDetail } from "../types/product";
import ProductImage from "./ProductImage";

interface ProductDetailsProps {
  product: ProductDetail;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const synonymsList = product.synonyms
    ? product.synonyms.split(/[,\n]/).map((s) => s.trim()).filter(Boolean)
    : [];

  const certList = product.certificates
    ? product.certificates.split(/[,\n]/).map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

      {/* ── LEFT: Info grid ─────────────────────────────────────── */}
      <div className="flex-1 min-w-0">

        {/* Product Name */}
        <h2
          id="dialog-title"
          className="text-[17px]  md:text-[20px] 2xl:text-[30px] font-[Geologica] uppercase md:text-4xl font-bold text-[#1d4ed8] mb-8 leading-tight"
        >
          {product.name}
        </h2>

        {/* Two-column info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">

          {/* Column 1 – Synonyms */}
          <div>
            <p className="text-[14px] lg:text-[14px]  font-[Geologica] 2xl:text-[18px] font-bold tracking-[0.15em] text-[#1d4ed8]/65 uppercase mb-2">
              Synonyms
            </p>
            <ul className="space-y-0.5 mb-6">
              {synonymsList.length > 0 ? synonymsList.map((s, i) => (
                <li key={i} className="text-sm font-['Libre_Baskerville'] lg:text-[12px] 2xl:text-[14px]   text-[#1a5276] leading-snug">{s}</li>
              )) : (
                <li className="text-sm text-gray-400">—</li>
              )}
            </ul>

            {/* Certificates below synonyms */}
            <p className="text-[14px] lg:text-[12px]  font-[Geologica] 2xl:text-[15px] font-bold tracking-[0.15em] text-[#1d4ed8]/65 uppercase mb-2">
              Certificates Available
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
              {certList.length > 0 ? certList.map((c, i) => (
                <p key={i} className="text-[12px] font-['Libre_Baskerville'] lg:text-[12px] 2xl:text-[14px]  text-[#1a5276] leading-snug">{c}</p>
              )) : (
                <p className="text-sm text-gray-400">—</p>
              )}
            </div>
          </div>

          {/* Column 2 – CAS / DMF / Therapeutic / Plant */}
          <div className="space-y-5 mt-0 sm:mt-0">
            <div>
              <p className="text-[14px] lg:text-[14px]  font-[Geologica] 2xl:text-[18px] font-bold tracking-[0.15em] text-[#1d4ed8]/65 uppercase mb-1">
                CAS No.
              </p>
              <p className="text-[12px] font-['Libre_Baskerville'] lg:text-[12px] 2xl:text-[14px]  text-gray-700">{product.casNo || "—"}</p>
            </div>
            <div>
              <p className="text-[14px] lg:text-[14px]  font-[Geologica] 2xl:text-[18px] font-bold tracking-[0.15em] text-[#1d4ed8]/65 uppercase mb-1">
                DMF
              </p>
              <p className="text-[12px] font-['Libre_Baskerville'] lg:text-[12px] 2xl:text-[14px]  text-gray-700">{product.dmf || "—"}</p>
            </div>
            <div>
              <p className="text-[14px] lg:text-[14px]  font-[Geologica] 2xl:text-[18px] font-bold tracking-[0.15em] text-[#1d4ed8]/65 uppercase mb-1">
                Therapeutic Use
              </p>
              <p className="text-[12px] font-['Libre_Baskerville'] lg:text-[12px] 2xl:text-[14px]  text-gray-700">{product.therapeuticUse || "—"}</p>
            </div>
            <div>
              <p className="text-[14px] lg:text-[14px]  font-[Geologica] 2xl:text-[18px] font-bold tracking-[0.15em] text-[#1d4ed8]/65 uppercase mb-1">
                Plant Part Used
              </p>
              <p className="text-[12px] font-['Libre_Baskerville'] lg:text-[12px] 2xl:text-[14px]  text-gray-700">{product.plantPartUsed || "—"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Single product image ─────────────────────────── */}
      {/*
        The product image is one pre-composited image that already
        contains both hexagon shapes (plant + compound) as designed
        by the brand. We simply render it at a fixed size — no
        clipping, no duplication, no CSS hexagon tricks.
      */}
      <div className="flex-shrink-0 w-full lg:w-56 flex items-start justify-center lg:justify-end mt-4 lg:mt-0">
        <div className="relative w-48 sm:w-56 aspect-[4/5]">
          <ProductImage
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 50vw, 224px"
            className="object-contain"
            priority
          />
        </div>
      </div>

    </div>
  );
}
