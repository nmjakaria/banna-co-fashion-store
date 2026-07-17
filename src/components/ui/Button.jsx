export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  isLoading = false, 
  fullWidth = false, 
  ...props 
}) {
  
  const baseClasses = "btn rounded-md font-sans font-medium transition-subtle";
  
  const variants = {
    primary: "bg-[#C97A4A] hover:bg-[#b0673b] text-white border-none",
    secondary: "bg-[#0E0E10] hover:bg-black text-[#FAFAF8] border-none",
    outline: "btn-outline border-[#0E0E10] text-[#0E0E10] hover:bg-[#0E0E10] hover:text-white",
    ghost: "btn-ghost text-[#0E0E10] hover:bg-[#EBEBE8]",
  };
  
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <span className="loading loading-spinner loading-sm"></span>}
      {children}
    </button>
  );
}