import type { EventItem, ProductItem, FeatureItem, NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'R&D', href: '/research' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'event-1',
    day: '04',
    month: 'April',
    title: 'Event Name',
    time: '1 PM - 3PM',
    location: 'Event Location',
  },
  {
    id: 'event-2',
    day: '04',
    month: 'April',
    title: 'Event Name',
    time: '1 PM - 3PM',
    location: 'Event Location',
  },
  {
    id: 'event-3',
    day: '04',
    month: 'April',
    title: 'Event Name',
    time: '1 PM - 3PM',
    location: 'Event Location',
  },
]

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'api',
    title: 'ACTIVE PHARMACEUTICAL',
    subtitle: 'INGREDIENTS',
    imageSrc: 'https://images.unsplash.com/photo-1583912267550-d974d91b07ab?w=600&auto=format&fit=crop',
    imageAlt: 'Active Pharmaceutical Ingredients - powder and capsules',
  },
  {
    id: 'intermediates',
    title: 'INTERMEDIATES',
    imageSrc: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop',
    imageAlt: 'Pharmaceutical Intermediates',
  },
  {
    id: 'development',
    title: 'PRODUCTS UNDER',
    subtitle: 'DEVELOPMENT',
    imageSrc: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&auto=format&fit=crop',
    imageAlt: 'Products Under Development',
  },
]

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'r-and-d',
    title: 'RESEARCH & DEVELOPMENT',
    description:
      'Research & Development is a part of our evolution, constantly addressing the ever changing market demands and delivering innovative solutions.',
    iconPath: 'hexagons-connected',
  },
  {
    id: 'relationships',
    title: 'BUILDING RELATIONSHIPS',
    description:
      'Building long term relationships by collaborating with our partners and customers to create solutions that meet their unique needs.',
    iconPath: 'hexagons-building',
  },
  {
    id: 'sops',
    title: 'SOPS & EXECUTION',
    description:
      'Our processes are backed by constant monitoring at every stage of production, guarantee improved processes and excellence in quality.',
    iconPath: 'hexagons-sop',
  },
  {
    id: 'compliance',
    title: 'COMPLIANCE & QUALITY',
    description:
      'Quality assurance adhering to GMP guidelines set by ICH Q7 ensures that we meet the most stringent regulatory and manufacturing standards.',
    iconPath: 'hexagons-compliance',
  },
]

export const QUICK_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]
