import type { ReactNode } from "react";

export function PageHeader({
  title,
  lead,
  action,
}: {
  title: string;
  lead?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6 px-8 pt-10 pb-8 md:px-12 md:pt-12">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            {lead}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
