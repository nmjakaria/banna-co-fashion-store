export default function SectionHeading({ 
  title, 
  subtitle, 
  className = '', 
  center = false 
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center flex flex-col items-center' : ''} ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E0E10] tracking-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-4 text-[#8A8578] text-base md:text-lg ${center ? 'max-w-2xl' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}