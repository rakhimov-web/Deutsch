import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Vault, LifeBuoy } from 'lucide-react';
import { SidebarWithTabs, type NavItem } from '@/components/ui/sidebar-with-chrome-like-tabs';
import { SidebarNavContent, SidebarFooterContent } from '@/components/sidebar-nav-content';
import { BrandMark } from '@/components/brand-mark';
import { AppLoader } from '@/components/app-loader';
import GrammarPage from '@/pages/GrammarPage';
import VocabularyPage from '@/pages/VocabularyPage';
import GuidePage from '@/pages/GuidePage';

// Flat list — used only for tab labels/icons and the "+" quick-open menu.
// The actual left-nav layout (Kurse > Lektion 1 > Grammatik/Wortschatz,
// plus Anleitung at the bottom) lives in <SidebarNavContent />.
const navItems: NavItem[] = [
  { id: 'grammar', label: 'Grammatik', icon: BookOpen },
  { id: 'vocabulary', label: 'Wortschatz', icon: Vault },
  { id: 'guide', label: 'Anleitung', icon: LifeBuoy },
];

const contentMap: Record<string, ReactNode> = {
  grammar: <GrammarPage />,
  vocabulary: <VocabularyPage />,
  guide: <GuidePage />,
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 550);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = (navId: string) => contentMap[navId] ?? <GuidePage />;

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
            defaultNavId="guide"
            navContent={<SidebarNavContent />}
            footer={<SidebarFooterContent />}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
