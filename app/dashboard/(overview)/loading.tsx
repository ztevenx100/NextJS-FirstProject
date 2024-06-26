import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <DashboardSkeleton />
      </div>
    );
  }