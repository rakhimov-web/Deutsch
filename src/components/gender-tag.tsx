import { cn } from "@/lib/utils";

type Gender = "der" | "die" | "das";

const styles: Record<Gender, string> = {
  der: "bg-der/15 text-der border-der/30",
  die: "bg-die/15 text-die border-die/30",
  das: "bg-das/15 text-das border-das/30",
};

export function GenderTag({
  gender,
  className,
}: {
  gender: Gender;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-5 min-w-[2.75rem] items-center justify-center rounded-full border px-2 text-xs font-semibold",
        styles[gender],
        className,
      )}
    >
      {gender}
    </span>
  );
}
