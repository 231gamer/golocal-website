import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 md:p-6">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent md:h-16 md:w-16">
        <Icon className="h-7 w-7 md:h-8 md:w-8" />
      </div>
      <h3 className="font-semibold text-foreground text-sm md:text-base">{title}</h3>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground md:text-sm">{description}</p>
      )}
    </div>
  );
}
