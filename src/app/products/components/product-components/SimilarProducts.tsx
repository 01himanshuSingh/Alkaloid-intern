// "use client";

// import { motion } from "framer-motion";
// import { ProductLink } from "../types/product";
// import { VIEWPORT_ONCE, slideLeftVariants } from "../constant/animations";
// import ProductList from "../shared/ProductList";

// interface SimilarProductsProps {
//   products: ProductLink[];
// }

// export default function SimilarProducts({ products }: SimilarProductsProps) {
//   return (
//     <motion.section
//       variants={slideLeftVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={VIEWPORT_ONCE}
//       aria-label="Similar Products"
//     >
//       <h2 className="font-['Geologica'] text-[14px] md:text-base lg:text-[20px] 2xl:text-[30px] uppercase tracking-widest font-bold text-[#374151] mb-5">
//         Similar Products
//       </h2>
//       <ProductList items={products} />
//     </motion.section>
//   );
// }
