import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export function StatCard({ value, suffix = "", label, description, icon: Icon }: StatCardProps) {
  return (
    <article className="statCard">
      <div className="statIcon"><Icon size={24} /></div>
      <div>
        <strong>{value}<span>{suffix}</span></strong>
        <h3>{label}</h3>
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}
