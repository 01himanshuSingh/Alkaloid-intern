import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function ProductImage({
  src,
  alt,
  className = "",
  fill = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: ProductImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${className}`}
        priority={priority}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/images/products/placeholder.jpg";
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      sizes={sizes}
      className={`object-cover ${className}`}
      priority={priority}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = "/images/products/placeholder.jpg";
      }}
    />
  );
}
