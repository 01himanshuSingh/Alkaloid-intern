import { ProductDetail } from "../types/product";
import ProductImage from "./ProductImage";

interface ProductDetailsProps {
  product: ProductDetail;
}

const LABEL_COLOR = "#8A9A46"; // olive-green label color
const VALUE_COLOR = "#4a4a4a";

export default function ProductDetails({ product }: ProductDetailsProps) {
  const certList = product.certificates
    ? product.certificates.split(/[,\n]/).map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      {/* ── LEFT: Product Image (single pre-composited image, no clipping) ── */}
      <div className="flex-shrink-0 w-full lg:w-56 flex items-start justify-center lg:justify-start mt-4 lg:mt-0">
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

      {/* ── RIGHT: Info ──────────────────────────────────────────── */}
      <div className="flex-1 min-w-0 w-full">
        {/* Product Name */}
        <h2
          id="dialog-title"
          className="text-[18px] md:text-[20px] 2xl:text-[35px] font-[Geologica] uppercase font-medium text-[#1d4ed8] mb-6 leading-tight"
        >
          {product.name}
        </h2>

        {/* Two-column info grid: CAS/Therapeutic top row, DMF/Plant bottom row */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mb-6">
          <div>
            <p
              className="text-[14px] lg:text-[13px] 2xl:text-[20px] font-[Geologica] font-medium tracking-[0.15em] uppercase mb-1"
              style={{ color: LABEL_COLOR }}
            >
              CAS No.
            </p>
            <p
              className="text-[12px] lg:text-[12px] 2xl:text-[18px] font-['Libre_Baskerville']"
              style={{ color: VALUE_COLOR }}
            >
              {product.casNo || "—"}
            </p>
          </div>

          <div>
            <p
              className="text-[14px] lg:text-[13px] 2xl:text-[20px] font-[Geologica] font-medium tracking-[0.15em] uppercase mb-1"
              style={{ color: LABEL_COLOR }}
            >
              Therapeutic Use
            </p>
            <p
              className="text-[12px] lg:text-[12px] 2xl:text-[18px] font-['Libre_Baskerville']"
              style={{ color: VALUE_COLOR }}
            >
              {product.therapeuticUse || "—"}
            </p>
          </div>

          <div>
            <p
              className="text-[14px] lg:text-[13px] 2xl:text-[20px] font-[Geologica] font-medium tracking-[0.15em] uppercase mb-1"
              style={{ color: LABEL_COLOR }}
            >
              DMF
            </p>
            <p
              className="text-[12px] lg:text-[12px] 2xl:text-[18px] font-['Libre_Baskerville']"
              style={{ color: VALUE_COLOR }}
            >
              {product.dmf || "—"}
            </p>
          </div>

          <div>
            <p
              className="text-[14px] lg:text-[13px] 2xl:text-[20px] font-[Geologica] font-medium tracking-[0.15em] uppercase mb-1"
              style={{ color: LABEL_COLOR }}
            >
              Plant Part Used
            </p>
            <p
              className="text-[12px] lg:text-[12px] 2xl:text-[18px] font-['Libre_Baskerville']"
              style={{ color: VALUE_COLOR }}
            >
              {product.plantPartUsed || "—"}
            </p>
          </div>
        </div>

        {/* Certifications - full width below the grid */}
        <div>
          <p
            className="text-[14px] lg:text-[13px] 2xl:text-[20px] font-[Geologica] font-medium tracking-[0.15em] uppercase mb-2"
            style={{ color: LABEL_COLOR }}
          >
            Certifications
          </p>
          <ul className="space-y-0.5">
            {certList.length > 0 ? (
              certList.map((c, i) => (
                <li
                  key={i}
                  className="text-[12px] lg:text-[12px] 2xl:text-[18px] font-['Libre_Baskerville'] leading-snug"
                  style={{ color: VALUE_COLOR }}
                >
                  {c}
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-400">—</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}