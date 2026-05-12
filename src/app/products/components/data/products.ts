import { ProductPageData } from "../types/product";

export const productPageData: ProductPageData = {
  slug: "hyoscine-ph-eur",
  heroImage:
    "/Product page/Individual Product/Copy of cover (1).jpg",
  categories: [
    {
      id: "anticholinergics",
      hexagonImage:
        "/Product page/Individual Product/HYOSCINE PH. EUR/cover.png",
      imageAlt: "Brugmansia botanical plant",
      products: [
        { name: "Hyoscine Ph. Eur.", slug: "hyoscine-ph-eur" },
        { name: "Cimetropium Bromide", slug: "cimetropium-bromide" },
        { name: "Hyoscine Hydrobromide", slug: "hyoscine-hydrobromide" },
        { name: "Methscopolamine Bromide", slug: "methscopolamine-bromide" },
        { name: "Hyoscine Ph. Eur.", slug: "hyoscine-ph-eur-2" },
        { name: "Scopine Hydrochloride", slug: "scopine-hydrochloride" },
      ],
    },
    {
      id: "pelargonium",
      hexagonImage:
        "/Product page/Individual Product/PELARGONIUM SIDIODES/Cover.png",
      imageAlt: "Pelargonium sidiodes plant",
      products: [
        {
          name: "Pelargonium Sidiodes Powdered Extract (PS-PE)",
          slug: "pelargonium-ps-pe",
        },
        {
          name: "Pelargonium Sidiodes Extract (PS-Extract)",
          slug: "pelargonium-ps-extract",
        },
      ],
    },
    {
      id: "oxybuprocaine",
      hexagonImage:
        "/Product page/Individual Product/PELARGONIUM SIDIODES/Cover.png",
      imageAlt: "Oxybuprocaine botanical source",
      products: [
        {
          name: "Oxybuprocaine Hydrochloride Ph.Eur/Benoxinate Hydrochloride USP",
          slug: "oxybuprocaine-hydrochloride",
        },
        { name: "Glycopyrronium Bromide", slug: "glycopyrronium-bromide" },
      ],
    },
  ],
  gridProducts: [
    {
      id: "ivy-leaf",
      name: "Ivy Leaf Dried Extract",
      slug: "ivy-leaf-dried-extract",
      hexagonImage:
        "/Product page/Individual Product/IVY Leaf DRIED EXTRACT/cover.png",
      imageAlt: "Ivy leaf botanical extract",
    },
    {
      id: "ipecacuanha",
      name: "Ipecacuanha Liquid Extract Standardized",
      slug: "ipecacuanha-liquid-extract",
      hexagonImage:
        "/Product page/Individual Product/IPECACUANHA LIQUID EXTRACT STANDARDIZED/cover.png",
      imageAlt: "Ipecacuanha plant extract",
    },
    {
      id: "chamomile",
      name: "Chamomile Tincture",
      slug: "chamomile-tincture",
      hexagonImage:
        "/Product page/Individual Product/CHAMOMILE TINCTURE/cover.png",
      imageAlt: "Chamomile flower tincture",
    },
    {
      id: "rhatany",
      name: "Rhatany Tincture",
      slug: "rhatany-tincture",
      hexagonImage:
        "/Product page/Individual Product/RHATANY TINCTURE/cover.png",
      imageAlt: "Rhatany plant tincture",
    },
    {
      id: "methyl-di",
      name: "Methyl Di (2-Thienyl) Glycolate (MDTG)",
      slug: "methyl-di-2-thienyl-glycolate",
      hexagonImage:
        "/Product page/Individual Product/CHAMOMILE TINCTURE/cover.png",
      imageAlt: "Methyl Di Thienyl Glycolate compound",
    },
    {
      id: "myrrh",
      name: "Myrrh Tincture",
      slug: "myrrh-tincture",
      hexagonImage: "/Product page/Individual Product/MYRRH TINCTURE/Cover.png",
      imageAlt: "Myrrh resin tincture",
    },
  ],
  feature: {
    title: "Hyoscine Ph. Eur.",
    synonyms: [
      "Scopolamine Butylbromide",
      "Hyoscine Butylbromide",
      "Scopolamin Butylbromadum",
      "Butylscopolamine Bromide",
      "Hyoscine N-Butyl Bromide Buscapina",
      "Scopolamine N-Butyl Bromide",
      "Scopolamine N-Butylbromide",
      "N-Butylscopolammonium Bromide",
    ],
    casNumber: "149-64-4",
    dmfAvailable: true,
    therapeuticUse: "Antispasmodic",
    plantName: "Dabosia Leaves",
    plantPartUsed: "PLANT PART USED",
    certificates: [
      { name: "WHO GMP Schedule M" },
      { name: "Intertek (Third Party Independent Audit)" },
      { name: "Written Confirmation, Egyptian Drug Authority" },
      { name: "COPP for China" },
      { name: "Certificate of Suitability" },
    ],
    hexagonImage:
      "/Product page/Individual Product/HYOSCINE PH. EUR/Composed.png",
  },
  similarProducts: [
    { label: "Cimetropium Bromide", slug: "cimetropium-bromide" },
    { label: "Hyoscine Hydrobromide", slug: "hyoscine-hydrobromide" },
    { label: "Methscopolamine Bromide", slug: "methscopolamine-bromide" },
    { label: "Hyoscine Ph. Eur.", slug: "hyoscine-ph-eur-variant" },
  ],
  otherProducts: [
    { label: "Ivy Leaf dried Extract", slug: "ivy-leaf-dried-extract" },
    {
      label: "Ipecacuanha Liquid Extract Standardized",
      slug: "ipecacuanha-liquid-extract",
    },
    { label: "Chamomile Tincture", slug: "chamomile-tincture" },
  ],
};

export const getProductBySlug = (slug: string): ProductPageData | undefined => {
  if (productPageData.slug === slug) return productPageData;
  return undefined;
};
