import { courses } from '@/data/courses';

/** navId -> "/lektion-1/grammatik" style path (German slugs throughout). */
const navIdToPathMap = new Map<string, string>();
/** "lektion-1/grammatik" -> navId */
const pathToNavIdMap = new Map<string, string>();

for (const course of courses) {
  for (const link of course.links) {
    const path = `${course.slug}/${link.slug}`;
    navIdToPathMap.set(link.id, path);
    pathToNavIdMap.set(path, link.id);
  }
}
navIdToPathMap.set('guide', 'anleitung');
pathToNavIdMap.set('anleitung', 'guide');

export function navIdToPath(navId: string): string {
  return `/${navIdToPathMap.get(navId) ?? 'anleitung'}`;
}

export function pathToNavId(pathname: string): string {
  const clean = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return pathToNavIdMap.get(clean) ?? 'guide';
}
