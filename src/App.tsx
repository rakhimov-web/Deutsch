import { useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Vault, LifeBuoy } from 'lucide-react';
import { SidebarWithTabs, type NavItem } from '@/components/ui/sidebar-with-chrome-like-tabs';
import { SidebarNavContent, SidebarFooterContent } from '@/components/sidebar-nav-content';
import { BrandMark } from '@/components/brand-mark';
import { AppLoader } from '@/components/app-loader';
import { LessonPlaceholderPage } from '@/pages/LessonPlaceholderPage';
import GuidePage from '@/pages/GuidePage';
import { courses } from '@/data/courses';
import { navIdToPath, pathToNavId } from '@/lib/routes';

// Flat list — used for tab labels/icons, the "+" quick-open menu, and the
// icon-only rail shown when the sidebar is collapsed. The actual left-nav
// layout (Kurse label > Lektion accordion > Grammatik/Wortschatz, plus
// Anleitung at the bottom) lives in <SidebarNavContent />.
const navItems: NavItem[] = [
  ...courses.flatMap((course) =>
    course.links.map((link) => ({
      id: link.id,
      label: `${course.label} · ${link.label}`,
      icon: link.id.endsWith('grammar') ? BookOpen : Vault,
    })),
  ),
  { id: 'guide', label: 'Anleitung', icon: LifeBuoy },
];

const contentMap: Record<string, ReactNode> = {
  ...Object.fromEntries(
    courses.flatMap((course) =>
      course.links.map((link) => [
        link.id,
        <LessonPlaceholderPage
          key={link.id}
          lessonLabel={course.label}
          kind={link.id.endsWith('grammar') ? 'grammar' : 'vocabulary'}
        />,
      ]),
    ),
  ),
  guide: <GuidePage />,
};

/**
 * Keeps the URL bar in sync with whatever the currently active tab shows,
 * so a lesson page can be bookmarked/shared/refreshed directly. Mounted
 * once per (tab, navId) pair by the shell's own AnimatePresence key, which
 * is exactly when a route change should happen.
 */
function RouteSync({ navId, children }: { navId: string; children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = navIdToPath(navId);
    if (location.pathname !== path) {
      navigate(path, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navId]);

  return <>{children}</>;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 550);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = (navId: string) => (
    <RouteSync navId={navId}>{contentMap[navId] ?? <GuidePage />}</RouteSync>
  );

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div key="loader" exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <AppLoader />
        </motion.div>
      ) : (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="h-screen">
          <SidebarWithTabs
            companyName="Lernraum"
            logo={<BrandMark />}
            navItems={navItems}
            renderContent={renderContent}
            defaultNavId={pathToNavId(location.pathname)}
            navContent={<SidebarNavContent />}
            footer={<SidebarFooterContent />}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
