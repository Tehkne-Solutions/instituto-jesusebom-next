import type { LucideIcon } from "lucide-react";
import { StaggerItem } from "./motion/StaggerItem";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export function ProjectCard({ title, category, description, image, icon: Icon }: ProjectCardProps) {
  return (
    <StaggerItem className="motionCard">
    <article className="projectCard">
      <div className="projectImage" style={{ backgroundImage: `url(${image})` }}>
        <span><Icon size={16} /> {category}</span>
      </div>
      <div className="projectBody">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">Saiba mais</a>
      </div>
    </article>
    </StaggerItem>
  );
}
