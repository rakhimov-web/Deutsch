import { Skeleton } from '@/components/ui/skeleton';

/**
 * Full-page skeleton shown for a beat on first load, shaped like the real
 * shell (sidebar rail + tab bar + content) so the swap-in feels seamless
 * instead of a generic spinner.
 */
export function AppLoader() {
  return (
    <div className="flex h-screen w-full bg-sidebar overflow-hidden">
      <div className="hidden md:flex w-[240px] flex-col bg-sidebar">
        <div className="flex items-center gap-3 h-[52px] px-4 border-b border-sidebar-border">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex-1 py-4 px-3 space-y-2">
          <Skeleton className="h-9 w-full rounded-lg" />
          <Skeleton className="h-8 w-[85%] ml-4 rounded-lg" />
          <Skeleton className="h-8 w-[70%] ml-8 rounded-lg" />
          <Skeleton className="h-8 w-[70%] ml-8 rounded-lg" />
        </div>
        <div className="p-3 space-y-1.5">
          <Skeleton className="h-8 w-full rounded-lg" />
          <Skeleton className="h-8 w-full rounded-lg" />
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-end gap-1 bg-sidebar pt-2 pb-0 px-2">
          <Skeleton className="h-10 w-36 rounded-t-2xl" />
          <Skeleton className="h-8 w-8 rounded-full mb-0.5" />
        </div>
        <div className="flex-1 bg-background md:rounded-tl-none md:rounded-3xl p-8 space-y-4">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-4 w-full max-w-md" />
          <div className="grid gap-4 sm:grid-cols-2 pt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
