export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-[#FAFAF8]">

      <div className="relative flex items-center justify-center w-16 h-16 mb-8">

        <div className="absolute inset-0 rounded-full border border-[#EBEBE8]" />

        <div className="absolute inset-0 rounded-full border-t border-[#0E0E10] animate-[spin_1.5s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
      </div>
      

      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-[#EBEBE8]" />
        <p className="font-serif text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-[#8A8578] animate-pulse">
          Loading
        </p>
        <div className="w-8 h-px bg-[#EBEBE8]" />
      </div>
    </div>
  );
}