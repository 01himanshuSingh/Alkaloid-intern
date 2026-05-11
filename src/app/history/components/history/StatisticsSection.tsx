import { StatisticItem } from "../../types/history";
import { OverlayImageCard } from "./OverlayImageCard";

interface StatisticsSectionProps {
  items: StatisticItem[];
}

export function StatisticsSection({ items }: StatisticsSectionProps) {
  return (
    <section aria-label="Company statistics" className="flex flex-col w-full">
      {items.map((item) => (
        <OverlayImageCard key={item.id} data={item} />
      ))}
    </section>
  );
}
