import { FadeIn } from "./motion/FadeIn";
import { RevealText } from "./motion/RevealText";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <FadeIn className={`sectionHeader ${align === "center" ? "center" : ""}`}>
      <span>{eyebrow}</span>
      <RevealText text={title} />
      {text && <p>{text}</p>}
    </FadeIn>
  );
}
