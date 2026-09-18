import { motion } from 'framer-motion';
import {
  BookOpenCheck,
  Compass,
  History,
  LayoutGrid,
  Send,
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { GenderTag } from '@/components/gender-tag';
import { cn } from '@/lib/utils';

const SUPPORT_TELEGRAM_URL = 'https://t.me/iamabdurahmon';

const steps = [
  {
    icon: Compass,
    title: "Kurse ro'yxatidan darsni tanlang",
    body: "Chap paneldagi \u201cKurse\u201d bo'limida har bir Lektion alohida element sifatida ochiladi; ichida Grammatik va Wortschatz havolalari joylashgan.",
  },
  {
    icon: BookOpenCheck,
    title: "Grammatik yoki Wortschatzni oching",
    body: "Havolani bosing — tanlangan sahifa joriy tabda ochiladi. Sahifalar orasida almashish tepadagi Chrome uslubidagi tab panel orqali amalga oshadi.",
  },
  {
    icon: LayoutGrid,
    title: 'Bir nechta sahifani parallel oching',
    body: "Tab panelidagi \u201c+\u201d tugmasi orqali istalgan sahifani yangi tabda oching, yoki sidebar tepasidagi qidiruv orqali kerakli havolani tezda toping.",
  },
  {
    icon: History,
    title: "Anleitungga qayting yoki tarixni tozalang",
    body: "Pastki \u201cSystem\u201d blokidagi Anleitung havolasi shu sahifaga qaytaradi; \u201cVerlauf l\u00f6schen\u201d esa barcha ochiq tablarni tozalab, boshidan boshlaydi.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Bu loyiha nima?',
    a: "Lernraum — nemis tilini A1 darajasidan boshlab o'rganish uchun shaxsiy bilim bazasi. Har bir dars (Lektion) Grammatik va Wortschatz qismlariga bo'linib, alohida sahifada saqlanadi. Backend yo'q — hammasi shu repo ichidagi statik ma'lumotlar asosida, brauzerda ishlaydi.",
  },
  {
    q: "Yangi dars qanday qo'shiladi?",
    a: "Har bir Lektion markazlashgan ma'lumotlar faylida tavsiflanadi. Yangi Lektion qo'shilganda u avtomatik ravishda sidebardagi \u201cKurse\u201d ro'yxatiga va URL marshrutlariga qo'shiladi — mavjud sahifalar o'zgarmaydi.",
  },
  {
    q: "der / die / das ranglari nimani anglatadi?",
    a: "Uchta rang — ko'k, qizil, sariq — nemis tilidagi grammatik jins (artikl)ni ko'rsatadi. Lug'atdagi har bir ot yonida shu teglardan biri turadi, shu bilan artiklni ko'rish bilanoq yodda saqlash osonlashadi.",
  },
  {
    q: 'Sahifa manzili (URL) nima uchun kerak?',
    a: "Har bir Grammatik/Wortschatz sahifasi o'zining nemischa manzili (masalan, lektion-1/grammatik)ga ega, shuning uchun uni saqlab qo'yish yoki ulashish mumkin — sahifani qayta ochganda aynan o'sha joydan davom etasiz.",
  },
];

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.05, 0.7, 0.1, 1] }}
      className="relative flex gap-4 sm:gap-5"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-foreground">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        {!isLast && <div className="mt-1 w-px flex-1 bg-border" />}
      </div>
      <div className={cn('flex-1', isLast ? 'pb-1' : 'pb-9')}>
        <h3 className="font-semibold text-foreground text-[15px] sm:text-base">{step.title}</h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{step.body}</p>
      </div>
    </motion.div>
  );
}

export default function GuidePage() {
  return (
    <div>
      <div className="px-4 pt-6 sm:px-8 sm:pt-10 md:px-12">
        <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
          Anleitung
        </span>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-[2.25rem]">
          To'rt qadamda Lernraum'dan foydalaning
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Lernraum — bitta dasturchining nemis tilini o'rganish va bilimlarni tartibga solish uchun tirik
          omborxonasi. Quyida platformaning har bir qismi qanday ishlashi aniq tushuntirilgan.
        </p>
      </div>

      <div className="px-4 pb-12 pt-10 sm:px-8 md:px-12">
        <section className="max-w-2xl">{steps.map((step, i) => (
          <TimelineStep key={step.title} step={step} index={i} isLast={i === steps.length - 1} />
        ))}</section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-foreground">Rang tizimi</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Butun interfeysda bitta funksional rang qoidasi bor: artikllar. Boshqa hech narsa shu ranglar
            bilan bezatilmaydi — shunda ular har doim ma'no anglatadi.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3">
              <GenderTag gender="der" />
              <span className="text-sm text-muted-foreground">erkak jinsi — der Mann</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3">
              <GenderTag gender="die" />
              <span className="text-sm text-muted-foreground">ayol jinsi — die Frau</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3">
              <GenderTag gender="das" />
              <span className="text-sm text-muted-foreground">betaraf jins — das Kind</span>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-foreground">Savol-javob</h2>
          <Accordion type="single" collapsible className="mt-4 rounded-2xl border border-border bg-card">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className={cn(i === faqs.length - 1 ? 'border-none' : 'border-b border-border')}
              >
                <AccordionTrigger className="px-5 py-4 text-left text-[15px] font-medium text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-7">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">Yordam kerakmi?</h2>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Savol, taklif yoki xatolik haqida xabar bermoqchi bo'lsangiz, to'g'ridan-to'g'ri Telegram orqali
                yozing — imkon qadar tezroq javob beraman.
              </p>
            </div>
            <a
              href={SUPPORT_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary/90 active:scale-95"
            >
              <Send className="h-4 w-4" />
              Support
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
