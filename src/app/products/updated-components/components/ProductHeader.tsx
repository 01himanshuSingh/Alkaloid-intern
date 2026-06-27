interface ProductHeaderProps {
  name: string;
  onClose: () => void;
}

export default function ProductHeader({ name, onClose }: ProductHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 mb-4">
      <h2 className="text-lg uppercase text-[12px] lg:text-[20px] 2xl:text-[25px] font-bold font-['Geologica'] text-[#1d4ed8] leading-snug">{name}</h2>
      <button
        onClick={onClose}
        aria-label="Close dialog"
        type="button"
        className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
