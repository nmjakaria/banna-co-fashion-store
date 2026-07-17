export default function ProductSkeleton() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Image Skeleton */}
      <div className="relative aspect-3/4 w-full skeleton-premium mb-4 rounded-none border border-[#EBEBE8]"></div>
      
      {/* Details Skeleton */}
      <div className="flex flex-col grow justify-between gap-3">
        <div>
          <div className="flex justify-between mb-2">
            <div className="h-3 w-16 skeleton-premium rounded-none"></div>
            <div className="h-3 w-8 skeleton-premium rounded-none"></div>
          </div>
          <div className="h-4 w-3/4 skeleton-premium rounded-none mb-2"></div>
          <div className="h-4 w-1/2 skeleton-premium rounded-none"></div>
        </div>
        
        {/* Price Skeleton */}
        <div className="h-5 w-20 skeleton-premium rounded-none mt-2"></div>
      </div>
    </div>
  );
}