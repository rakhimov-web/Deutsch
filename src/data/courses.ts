export interface CourseLink {
  /** navId — must match a key in App.tsx's contentMap */
  id: string;
  label: string;
}

export interface Course {
  id: string;
  label: string;
  links: CourseLink[];
}

/**
 * Every lesson is fully self-contained: its own Grammatik and Wortschatz
 * pages. Adding "Lektion 2" later means appending one entry here — the
 * sidebar accordion and tab system pick it up automatically.
 */
export const courses: Course[] = [
  {
    id: 'lektion-1',
    label: 'Lektion 1',
    links: [
      { id: 'grammar', label: 'Grammatik' },
      { id: 'vocabulary', label: 'Wortschatz' },
    ],
  },
];
