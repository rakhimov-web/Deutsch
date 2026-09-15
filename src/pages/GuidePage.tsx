import { PageHeader } from "@/components/page-header";
import { GenderTag } from "@/components/gender-tag";
import { Volume2, GitBranch, FolderTree, Blocks } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Bu loyiha nima?",
    a: "Lernraum — nemis tilini A1 darajasidan boshlab o'rganish uchun shaxsiy bilim bazasi. Har bir dars (Lektion) grammatika, lug'at va mashqlarga bo'linib, alohida sahifada saqlanadi. Backend yo'q — hammasi shu repo ichidagi statik ma'lumotlar asosida ishlaydi.",
  },
  {
    q: "Yangi dars qanday qo'shiladi?",
    a: "Har bir Lektion o'z ma'lumot fayliga ega. Yangi dars matnini (PDF yoki matn) qo'shsangiz, u avtomatik ravishda Darslar ro'yxatiga, Grammatika markaziga va Lug'at omboriga tarqatiladi — mavjud sahifalarni qayta yozish shart emas.",
  },
  {
    q: "der / die / das ranglari nimani anglatadi?",
    a: "Bu uchta rang — ko'k, qizil, sariq — nemis tilidagi grammatik jins (artikl)ni ko'rsatadi. Har bir ot yonida shu teglardan biri turadi, shunda artiklni ko'rish bilanoq yodda saqlash osonlashadi.",
  },
  {
    q: "Talaffuz tugmasi qanday ishlaydi?",
    a: "Lug'at omboridagi har bir so'z brauzeringizning o'rnatilgan nemis ovoz sintezidan (Web Speech API) foydalanib o'qib beradi. Internetga ulanish yoki tashqi audio fayl talab qilinmaydi.",
  },
];

const structure = [
  {
    icon: FolderTree,
    title: "Darslar (Lessons)",
    body: "Har bir Lektion uchun umumiy ko'rinish — qamrab olingan mavzular va qanday davom etish kerakligi.",
  },
  {
    icon: Blocks,
    title: "Grammatika markazi",
    body: "Qoidalar vizual kartalarda, kontekstli misollar va qisqa tekshiruv savollari bilan.",
  },
  {
    icon: Volume2,
    title: "Lug'at ombori",
    body: "Artikl bo'yicha rang-kodlangan so'zlar, talaffuz tugmasi va aralash-quloq mashqi.",
  },
  {
    icon: GitBranch,
    title: "Kengaytiriladigan tuzilma",
    body: "Yangi Lektion qo'shilganda mavjud sahifalar buzilmaydi — marshrutlar va ma'lumotlar markazlashgan holda kengayadi.",
  },
];

export default function GuidePage() {
  return (
    <div>
      <PageHeader
        title="Qo'llanma"
        lead="Lernraum — bitta dasturchining nemis tilini o'rganish va bilimlarni tartibga solish uchun tirik omborxonasi. Quyida loyihaning ishlash mantig'i tushuntirilgan."
      />

      <div className="px-8 pb-12 md:px-12">
        <section className="grid gap-4 sm:grid-cols-2">
          {structure.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <item.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Rang tizimi
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Butun interfeysda bitta funksional rang qoidasi bor: artikllar.
            Boshqa hech narsa shu ranglar bilan bezatilmaydi — shunda ular
            har doim ma'no anglatadi.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3">
              <GenderTag gender="der" />
              <span className="text-sm text-muted-foreground">
                erkak jinsi — der Mann
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3">
              <GenderTag gender="die" />
              <span className="text-sm text-muted-foreground">
                ayol jinsi — die Frau
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3">
              <GenderTag gender="das" />
              <span className="text-sm text-muted-foreground">
                betaraf jins — das Kind
              </span>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Savol-javob
          </h2>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="text-[15px] font-medium text-foreground">
                  {item.q}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
