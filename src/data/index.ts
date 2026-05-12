import type { EventItem, ProductItem, FeatureItem, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Products", href: "/products" },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "event-1",
    day: "04",
    month: "April",
    title: "Event Name",
    time: "1 PM - 3PM",
    location: "Event Location",
    href: "#",
  },
  {
    id: "event-2",
    day: "04",
    month: "April",
    title: "Event Name",
    time: "1 PM - 3PM",
    location: "Event Location",
    href: "#",
  },
  {
    id: "event-3",
    day: "04",
    month: "April",
    title: "Event Name",
    time: "1 PM - 3PM",
    location: "Event Location",
    href: "#",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "api",
    title: "ACTIVE PHARMACEUTICAL INGREDIENTS",
    subtitle: "INGREDIENTS",
    imageSrc: "/Homepage/Active pharmaceutical ingredients.png",
    imageAlt: "Active Pharmaceutical Ingredients - powder and capsules",
  },
  {
    id: "intermediates",
    title: "INTERMEDIATES",
    imageSrc: "/Homepage/intermediates.png",
    imageAlt: "Pharmaceutical Intermediates",
  },
  {
    id: "development",
    title: "PRODUCTS UNDER DEVELOPMENT",
    subtitle: "DEVELOPMENT",
    imageSrc: "/Homepage/Products under development.png",
    imageAlt: "Products Under Development",
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "r-and-d",
    title: "RESEARCH & DEVELOPMENT",
    description:
      "Research & Development is a part of our evolution, constantly addressing the ever changing market demands and delivering innovative solutions.",
    iconPath: "hexagons-connected",
    imageSrc: "/Homepage/reasearch and development.png",
  },
  {
    id: "relationships",
    title: "BUILDING RELATIONSHIPS",
    description:
      "Building long term relationships by collaborating with our partners and customers to create solutions that meet their unique needs.",
    iconPath: "hexagons-building",
    imageSrc: "/Homepage/building relationships.png",
  },
  {
    id: "sops",
    title: "SOPS & EXECUTION",
    description:
      "Our processes are backed by constant monitoring at every stage of production, guarantee improved processes and excellence in quality.",
    iconPath: "hexagons-sop",
    imageSrc: "/Homepage/sops and execution.png",
  },
  {
    id: "compliance",
    title: "COMPLIANCE & QUALITY",
    description:
      "Quality assurance adhering to GMP guidelines set by ICH Q7 ensures that we meet the most stringent regulatory and manufacturing standards.",
    iconPath: "hexagons-compliance",
    imageSrc: "/Homepage/compliance and quality.png",
  },
];

export const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "History", href: "/history" },
];
