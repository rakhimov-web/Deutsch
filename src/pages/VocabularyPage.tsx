import { PageHeader } from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { Volume2 } from "lucide-react";

export default function VocabularyPage() {
  return (
    <div>
      <PageHeader
        title="Lug'at ombori"
        lead="47 ta so'z artikl bo'yicha rang-kodlanib, talaffuz tugmasi va aralash-savol mashqi bilan shu yerga joylanadi. Hozircha tuzilma tayyor — ma'lumotlar keyingi bosqichda ulanadi."
      />

      <div className="px-8 pb-12 md:px-12">
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-4">
              <Skeleton className="h-5 w-11 flex-shrink-0 rounded-full" />
              <div className="min-w-0 flex-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="mt-2 h-3.5 w-24" />
              </div>
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground/40">
                <Volume2 className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
