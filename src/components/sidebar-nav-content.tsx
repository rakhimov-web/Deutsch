import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookMarked, LifeBuoy, Search, Trash2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { courses } from '@/data/courses';
import { useTabs, useCloseMobileSheet } from '@/components/ui/sidebar-with-chrome-like-tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const sectionLabelClass = 'mb-2.5 px-2.5 font-semibold text-muted-foreground text-[11px] uppercase tracking-widest';

/**
 * Sidebar navigation, styled after the settings-sidebar-accordion pattern:
 * a plain section label ("Kurse" — not itself clickable) followed by one
 * accordion item per lesson. Expanding a lesson never navigates; only the
 * Grammatik/Wortschatz links inside it do. A search field above it filters
 * straight to matching links (bypassing the accordion) once you type.
 */
export function SidebarNavContent() {
  const { activeNavId, setActiveNav } = useTabs();
  const closeMobileSheet = useCloseMobileSheet();
  const [query, setQuery] = useState('');

  const navigate = (navId: string) => {
    setActiveNav(navId);
    closeMobileSheet();
  };

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const filteredCourses = useMemo(() => {
    if (!isSearching) return courses;
    return courses
      .map((course) => {
        const courseMatches = course.label.toLowerCase().includes(normalizedQuery);
        const links = courseMatches
          ? course.links
          : course.links.filter((l) => l.label.toLowerCase().includes(normalizedQuery));
        return { ...course, links };
      })
      .filter((course) => course.links.length > 0);
  }, [isSearching, normalizedQuery]);

  return (
    <nav className="px-3">
      <div className="relative mb-3 px-0.5">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Links durchsuchen…"
          className={cn(
            'w-full rounded-lg border border-sidebar-border bg-sidebar-accent/40 py-2 pl-8 pr-8 text-sm text-sidebar-foreground placeholder:text-muted-foreground/70',
            'outline-none transition-colors duration-150 ease-[cubic-bezier(0.2,0,0,1)]',
            'focus:border-sidebar-ring/60 focus:bg-sidebar-accent',
          )}
        />
        <AnimatePresence>
          {isSearching && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.12 }}
              onClick={() => setQuery('')}
              className="absolute right-2.5 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:text-sidebar-foreground"
              aria-label="Suche zurücksetzen"
            >
              <X className="h-3 w-3" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {!isSearching && <p className={sectionLabelClass}>Kurse</p>}

      <AnimatePresence mode="wait">
        {isSearching ? (
          <motion.div
            key="search-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-3"
          >
            {filteredCourses.length === 0 ? (
              <p className="px-2.5 py-3 text-sm text-muted-foreground">Hech narsa topilmadi.</p>
            ) : (
              filteredCourses.map((course) => (
                <div key={course.id}>
                  <p className="px-2.5 pb-1 text-xs font-semibold text-muted-foreground">{course.label}</p>
                  <ul className="flex flex-col gap-0.5">
                    {course.links.map((link) => (
                      <SidebarLink
                        key={link.id}
                        label={link.label}
                        isActive={activeNavId === link.id}
                        onClick={() => navigate(link.id)}
                      />
                    ))}
                  </ul>
                </div>
              ))
            )}
          </motion.div>
        ) : (
          <motion.div key="accordion" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <Accordion type="multiple" defaultValue={[courses[0]?.id ?? '']}>
              {courses.map((course) => {
                const isCourseActive = course.links.some((l) => l.id === activeNavId);
                return (
                  <AccordionItem key={course.id} value={course.id} className="border-none">
                    <AccordionTrigger
                      className={cn(
                        'rounded-lg px-2.5 py-2.5 hover:bg-sidebar-accent hover:no-underline [&>svg]:text-muted-foreground',
                        isCourseActive ? 'text-sidebar-foreground' : 'text-sidebar-foreground/80',
                      )}
                    >
                      <motion.div whileTap={{ scale: 0.97 }} className="flex items-center gap-2.5">
                        <BookMarked className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-semibold">{course.label}</span>
                      </motion.div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-1">
                      <ul className="ml-6 flex flex-col gap-0.5 border-l border-sidebar-border pl-3">
                        {course.links.map((link) => (
                          <SidebarLink
                            key={link.id}
                            label={link.label}
                            isActive={activeNavId === link.id}
                            onClick={() => navigate(link.id)}
                          />
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function SidebarLink({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <li>
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
        className={cn(
          'relative block w-full rounded-md py-1.5 px-2 text-left text-sm transition-colors',
          isActive
            ? 'text-sidebar-foreground font-semibold'
            : 'text-sidebar-foreground/60 hover:text-sidebar-foreground',
        )}
      >
        {isActive && (
          <motion.span
            layoutId="sidebarActiveDot"
            className="absolute -left-3 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r-full bg-sidebar-primary"
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          />
        )}
        {label}
      </motion.button>
    </li>
  );
}

/**
 * Bottom-of-sidebar block: a plain "System" label — styled exactly like
 * "Kurse" above — separates it from the nav list without needing a divider
 * line. "Anleitung" is a normal nav link and the app's default landing
 * tab; "Verlauf löschen" wipes every open tab and starts fresh on it.
 */
export function SidebarFooterContent() {
  const { activeNavId, setActiveNav, clearHistory } = useTabs();
  const closeMobileSheet = useCloseMobileSheet();
  const isGuideActive = activeNavId === 'guide';

  return (
    <div className="w-full px-1">
      <p className={cn(sectionLabelClass, 'px-1.5')}>System</p>
      <div className="space-y-1">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            setActiveNav('guide');
            closeMobileSheet();
          }}
          className={cn(
            'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors',
            isGuideActive
              ? 'bg-sidebar-accent text-sidebar-accent-foreground'
              : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground',
          )}
        >
          <LifeBuoy className="h-4 w-4" />
          Anleitung
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            clearHistory('guide');
            closeMobileSheet();
          }}
          className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-destructive/90 transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
          Verlauf löschen
        </motion.button>
      </div>
    </div>
  );
}
