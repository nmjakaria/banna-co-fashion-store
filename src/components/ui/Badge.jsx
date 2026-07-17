export default function Badge({ children, variant = 'neutral', className = '' }) {
  const baseClasses = "badge rounded-sm font-sans font-medium text-xs py-3 px-3 uppercase tracking-wider";
  
  const variants = {
    accent: "bg-[#C97A4A] text-[#FAFAF8] border-none",
    outline: "badge-outline border-[#EBEBE8] text-[#0E0E10] bg-transparent",
    neutral: "bg-[#0E0E10] text-[#FAFAF8] border-none",
    sale: "bg-red-700 text-white border-none",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}