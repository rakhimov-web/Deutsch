import { GraduationCap, BookMarked, LifeBuoy, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { courses } from '@/data/courses';
import { useTabs, useCloseMobileSheet } from '@/components/ui/sidebar-with-chrome-like-tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

/**
 * Hierarchical sidebar navigation: Kurse -> Lektion -> Grammatik / Wortschatz.
 * The group and lesson rows only expand/collapse — only the innermost
 * links (Grammatik, Wortschatz, Anleitung) ever open a tab.
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
      <Accordion type="multiple" defaultValue={['kurse']}>
        <AccordionItem value="kurse" className="border-none">
          <AccordionTrigger className="rounded-lg px-2.5 py-2.5 text-sidebar-foreground/90 hover:bg-sidebar-accent hover:no-underline [&>svg]:text-muted-foreground">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="h-4.5 w-4.5 text-muted-foreground" />
              <span className="text-sm font-semibold">Kurse</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-1 pt-0.5">
            <Accordion type="multiple" defaultValue={courses.map((c) => c.id)}>
              {courses.map((course) => (
                <AccordionItem key={course.id} value={course.id} className="border-none ml-1">
                  <AccordionTrigger className="rounded-lg px-2.5 py-2 text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground hover:no-underline [&>svg]:text-muted-foreground/70">
                    <div className="flex items-center gap-2.5">
                      <BookMarked className="h-4 w-4" />
                      <span className="text-sm font-medium">{course.label}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    <ul className="ml-[26px] flex flex-col gap-0.5 border-l border-sidebar-border pl-3">
                      {course.links.map((link) => {
                        const isActive = activeNavId === link.id;
                        return (
                          <li key={link.id}>
                            <button
                              onClick={() => navigate(link.id)}
                              className={cn(
                                'relative block w-full rounded-md py-1.5 px-2 text-left text-sm transition-colors',
                                isActive
                                  ? 'text-sidebar-foreground font-semibold'
                                  : 'text-sidebar-foreground/60 hover:text-sidebar-foreground',
                              )}
                            >
                              {isActive && (
                                <span className="absolute -left-3 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r-full bg-sidebar-primary" />
                              )}
                              {link.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
}

/**
 * Bottom-of-sidebar block: sits below the nav list with no divider line.
 * "Anleitung" is a normal nav link (and the app's default landing tab);
 * "Verlauf löschen" wipes every open tab and starts fresh on Anleitung.
 */
export function SidebarFooterContent() {
  const { activeNavId, setActiveNav, clearHistory } = useTabs();
  const closeMobileSheet = useCloseMobileSheet();
  const isGuideActive = activeNavId === 'guide';

  return (
    <div className="w-full space-y-1 px-1">
      <button
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
      </button>
      <button
        onClick={() => {
          clearHistory('guide');
          closeMobileSheet();
        }}
        className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-destructive/90 transition-colors hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
        Verlauf löschen
      </button>
    </div>
  );
}
