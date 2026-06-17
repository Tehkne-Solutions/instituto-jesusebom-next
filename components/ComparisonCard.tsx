type ComparisonCardProps = {
  href: string;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
};

export function ComparisonCard({ href, title, tag, description, bullets }: ComparisonCardProps) {
  return (
    <a className="comparisonCard" href={href}>
      <span>{tag}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <strong>Abrir versão →</strong>
    </a>
  );
}
