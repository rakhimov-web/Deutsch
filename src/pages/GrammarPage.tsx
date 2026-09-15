import { PageHeader } from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function GrammarPage() {
  return (
    <div>
      <PageHeader
        title="Grammatika markazi"
        lead="Lektion 1'dagi qoidalar interaktiv kartalarga aylantirilmoqda — talaffuz guruhlari, misollar va qisqa tekshiruv savollari bilan. Keyingi bosqichda shu yerga to'liq joylanadi."
      />

      <div className="grid gap-4 px-8 pb-12 sm:grid-cols-2 md:px-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-4 h-6 w-3/4" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-1.5 h-4 w-5/6" />
            <div className="mt-5 rounded-xl border border-border bg-background p-4">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="mt-2 h-4 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
