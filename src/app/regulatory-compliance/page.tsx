import type { Metadata } from "next";
import RegulatoryComplianceSection from "./component/RegulatoryComplianceSection";
import GlobalAcceptanceSection from "./component/GlobalAcceptanceSection";
import CTASection from "./component/CTASection";
import { regulatoryPageData } from "./data/regulatory";


export const metadata: Metadata = {
  title: "Regulatory Compliance | APL Alkaloids",
  description:
    "APL Alkaloids has earned exceptional recognition from global regulatory authorities including US FDA, ANSM, KFDA, TGA and CDSCO. Discover our global compliance standards.",
  openGraph: {
    title: "Regulatory Compliance | APL Alkaloids",
    description:
      "Over the past decade, APL has earned exceptional recognition from global regulatory authorities through rigorous quality standards.",
    type: "website",
  },
};

export default function RegulatoryPage() {
  const { compliance, globalAcceptance, cta } = regulatoryPageData;

  return (
    <main id="main-content" className="pt-5 2xl:pt-12">
      <RegulatoryComplianceSection data={compliance} />
      <GlobalAcceptanceSection data={globalAcceptance} />
      {/* <CTASection data={cta} /> */}
    </main>
  );
}