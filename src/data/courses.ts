export interface CourseLink {
  /** navId — must match a key in App.tsx's contentMap */
  id: string;
  label: string;
  /** URL slug segment, e.g. "grammatik" */
  slug: string;
}

export interface Course {
  id: string;
  label: string;
  /** URL slug segment, e.g. "lektion-1" */
  slug: string;
  links: CourseLink[];
}

/**
 * Every lesson is fully self-contained: its own Grammatik and Wortschatz
 * pages/routes. Adding a new lesson later means appending one entry here —
 * the sidebar accordion, tab system, and router all pick it up automatically.
 */
export const courses: Course[] = [1, 2, 3].map((n) => ({
  id: `lektion-${n}`,
  label: `Lektion ${n}`,
  slug: `lektion-${n}`,
  links: [
    { id: `lektion-${n}-grammar`, label: 'Grammatik', slug: 'grammatik' },
    { id: `lektion-${n}-vocabulary`, label: 'Wortschatz', slug: 'wortschatz' },
  ],
}));
