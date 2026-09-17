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
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 px-4 pt-6 pb-6 sm:px-8 sm:pt-10 sm:pb-8 md:px-12 md:pt-12">
      <div className="max-w-2xl">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-[15px]">
            {lead}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
