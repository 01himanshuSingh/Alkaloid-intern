import type { AboutPageData } from "@/types/about";

export const aboutPageData: AboutPageData = {
  hero: {
    imageSrc: "/About page/cover image.png",
    imageAlt:
      "Alkaloids Private Limited facility aerial view with staff assembled",
    headline:
      "We are driven by our purpose to positively impact people's lives worldwide through innovation and development in the Healthcare space.",
  },

  coreValues: {
    imageSrc: "/About page/Core Values.png",
    imageAlt: "APL leadership and team members at the office",
    highlightParagraph:
      "At APL, we believe quality is paramount, and it is our constant endeavour to exceed customer expectations by delivering highest quality of products and services.",
    bodyParagraphs: [
      "From choosing superior raw materials to implementing rigorous manufacturing processes and quality control measures, we ensure our products meet the stringent regulatory and industry benchmarks. At our cutting-edge facilities, we reinforce this commitment through:",
    ],
    bulletPoints: [
      { id: "cv-1", text: "A dedicated quality control team" },
      { id: "cv-2", text: "Advanced testing equipment" },
      { id: "cv-3", text: "Regular internal audits" },
      { id: "cv-4", text: "Management reviews and continual improvements" },
    ],
    closingParagraph:
      "As the world evolves and demands shift, we work closely with our partners and customers to understand their unique requirements and develop innovative solutions.",
  },

  objectives: {
    imageSrc: "/About page/Objectives & Principles.png",
    imageAlt: "APL senior leadership team in formal attire",
    objectives: [
      {
        id: "obj-1",
        paragraph:
          "Our objective is to achieve market leadership through continuous research and development, guided by the highest principles.",
      },
      {
        id: "obj-2",
        paragraph:
          "Whether it is uncompromising safety standards or assured reliability, our products are manufactured using latest technologies and superior materials, adhering to all applicable government regulations and industry protocols.",
      },
    ],
  },

  markets: {
    heading: "MARKETS WE SERVE",
    subtitle:
      "Since the inception in 1992, we at APL have continually pushed boundaries, providing solutions around the world.",
    mapImageSrc: "/About page/Markets We Serve.png",
    mapImageAlt: "World map showing APL market presence across continents",
  },
};
