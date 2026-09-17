import { motion } from 'framer-motion';
import { BookMarked, LifeBuoy, Trash2 } from 'lucide-react';
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
 * Grammatik/Wortschatz links inside it do.
 */
export function SidebarNavContent() {
  const { activeNavId, setActiveNav } = useTabs();
  const closeMobileSheet = useCloseMobileSheet();

  const navigate = (navId: string) => {
    setActiveNav(navId);
    closeMobileSheet();
  };

  return (
    <nav className="px-3">
      <p className={sectionLabelClass}>Kurse</p>
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
                  {course.links.map((link) => {
                    const isActive = activeNavId === link.id;
                    return (
                      <li key={link.id}>
                        <motion.button
                          whileTap={{ scale: 0.96 }}
                          onClick={() => navigate(link.id)}
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
                          {link.label}
                        </motion.button>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </nav>
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
