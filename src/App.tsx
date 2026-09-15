import type { ReactNode } from 'react';
import { LayoutGrid, BookOpen, Vault, HelpCircle } from 'lucide-react';
import { SidebarWithTabs, type NavItem } from '@/components/ui/sidebar-with-chrome-like-tabs';
import { BrandMark } from '@/components/brand-mark';
import LessonsPage from '@/pages/LessonsPage';
import GrammarPage from '@/pages/GrammarPage';
import VocabularyPage from '@/pages/VocabularyPage';
import GuidePage from '@/pages/GuidePage';

const navItems: NavItem[] = [
  { id: 'lessons', label: 'Darslar', icon: LayoutGrid },
  { id: 'grammar', label: 'Grammatika markazi', icon: BookOpen },
  { id: 'vocabulary', label: "Lug'at ombori", icon: Vault },
  { id: 'guide', label: "Qo'llanma", icon: HelpCircle },
];

const contentMap: Record<string, ReactNode> = {
  lessons: <LessonsPage />,
  grammar: <GrammarPage />,
  vocabulary: <VocabularyPage />,
  guide: <GuidePage />,
};

export default function App() {
  const renderContent = (navId: string) => contentMap[navId] ?? <LessonsPage />;

  return (
    <SidebarWithTabs
      companyName="Lernraum"
      logo={<BrandMark />}
      navItems={navItems}
      renderContent={renderContent}
      defaultNavId="lessons"
      footer={
        <div className="flex items-center gap-2 rounded-lg bg-sidebar-accent px-3 py-2.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>A1 &middot; 1 ta dars ulangan</span>
        </div>
      }
    />
  );
}
