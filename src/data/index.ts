import type { EventItem, ProductItem, FeatureItem, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "R&D", href: "/research" },
  { label: "Certifications", href: "/certifications" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
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
    imageSrc: "/PNG/Screenshot 2026-05-09 165134.png",
    imageAlt: "Active Pharmaceutical Ingredients - powder and capsules",
  },
  {
    id: "intermediates",
    title: "INTERMEDIATES",
    imageSrc: "/PNG/Screenshot 2026-05-09 172442.png",
    imageAlt: "Pharmaceutical Intermediates",
  },
  {
    id: "development",
    title: "PRODUCTS UNDER DEVELOPMENT",
    subtitle: "DEVELOPMENT",
    imageSrc: "/PNG/Screenshot 2026-05-09 172442.png",
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
    imageSrc: "/PNG/Screenshot 2026-05-09 163536.png",
  },
  {
    id: "relationships",
    title: "BUILDING RELATIONSHIPS",
    description:
      "Building long term relationships by collaborating with our partners and customers to create solutions that meet their unique needs.",
    iconPath: "hexagons-building",
    imageSrc: "/PNG/Screenshot 2026-05-09 163536.png",
  },
  {
    id: "sops",
    title: "SOPS & EXECUTION",
    description:
      "Our processes are backed by constant monitoring at every stage of production, guarantee improved processes and excellence in quality.",
    iconPath: "hexagons-sop",
    imageSrc: "/PNG/Screenshot 2026-05-09 163536.png",
  },
  {
    id: "compliance",
    title: "COMPLIANCE & QUALITY",
    description:
      "Quality assurance adhering to GMP guidelines set by ICH Q7 ensures that we meet the most stringent regulatory and manufacturing standards.",
    iconPath: "hexagons-compliance",
    imageSrc: "/PNG/Screenshot 2026-05-09 163536.png",
  },
];

export const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];
