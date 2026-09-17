import { motion } from 'framer-motion';
import { BookOpen, Vault, Hourglass } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface LessonPlaceholderPageProps {
  lessonLabel: string;
  kind: 'grammar' | 'vocabulary';
}

/**
 * Uniform "coming soon" page for every Lektion's Grammatik/Wortschatz slot.
 * Only the title is real for now — content is filled in lesson by lesson.
 */
export function LessonPlaceholderPage({ lessonLabel, kind }: LessonPlaceholderPageProps) {
  const Icon = kind === 'grammar' ? BookOpen : Vault;
  const kindLabel = kind === 'grammar' ? 'Grammatik' : 'Wortschatz';

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="p-6 sm:p-10 max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-1.5">
        <div className="h-9 w-9 rounded-xl bg-der/10 text-der flex items-center justify-center flex-shrink-0">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {lessonLabel} · {kindLabel}
        </p>
      </div>
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2">
        {lessonLabel}: {kindLabel}
      </h1>
      <p className="text-sm text-muted-foreground mt-2 max-w-md inline-flex items-center gap-1.5">
        <Hourglass className="h-3.5 w-3.5" /> Kontent tez orada qo'shiladi.
      </p>

      <div className="mt-8 space-y-3">
        <Skeleton className="h-24 w-full rounded-2xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Skeleton className="h-32 w-full rounded-2xl" />
          <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
      </div>
    </motion.div>
  );
}
