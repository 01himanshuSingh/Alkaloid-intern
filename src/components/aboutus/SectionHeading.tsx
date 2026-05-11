import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  variant?: "olive" | "white" | "dark";
}

export default function SectionHeading({
  as: Tag = "h2",
  children,
  className,
  variant = "olive",
}: SectionHeadingProps) {
  const variantClasses = {
    olive: "text-[#88A933]",
    white: "text-white",
    dark: "text-gray-900",
  };

  return (
    <Tag
      className={cn(
        "font-['Geologica',sans-serif] font-semibold tracking-wider uppercase",
        "leading-tight",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
