
import { Skeleton } from '@/components/ui/skeleton';

export const ProjectCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <Skeleton className="h-48 w-full" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <div className="flex gap-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-18" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-8 w-32" />
    </div>
  </div>
);

export const ProjectGridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 9 }).map((_, i) => (
      <ProjectCardSkeleton key={i} />
    ))}
  </div>
);

export const MetricsSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
        <Skeleton className="h-8 w-16 mb-2" />
        <Skeleton className="h-4 w-20" />
      </div>
    ))}
  </div>
);
