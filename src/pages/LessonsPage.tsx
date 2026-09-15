import { PageHeader } from "@/components/page-header";
import { ArrowUpRight, Plus } from "lucide-react";

const lektion1Topics = [
  "Nemis alifbosi va talaffuz qoidalari (ei, eu, ie, sch, ch, st, sp)",
  "Salomlashish va o'zini tanishtirish iboralari",
  "Sonlar: 0 dan 100 gacha",
  "47 so'zlik boshlang'ich lug'at (Blitz, Lektion 1)",
  "Qisqa matn: \u201eMein Weg nach Deutschland\u201c",
];

export default function LessonsPage() {
  return (
    <div>
      <PageHeader
        title="Darslar"
        lead="Har bir Lektion o'z sahifasiga ega: grammatika qoidalari, lug'at va mashqlar shu yerdan tarqaladi."
      />

      <div className="px-8 pb-12 md:px-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="#"
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-foreground">
                Lektion 1
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Alifbo va tanishuv
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {lektion1Topics.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </a>

          {["Lektion 2", "Lektion 3"].map((label) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-6 text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-border text-muted-foreground">
                <Plus className="h-4 w-4" />
              </div>
              <span className="mt-3 text-sm font-medium text-muted-foreground">
                {label}
              </span>
              <span className="mt-1 text-xs text-muted-foreground/70">
                Materiallar qo'shilganda paydo bo'ladi
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
