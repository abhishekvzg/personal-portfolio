import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";
import { FileText, Presentation } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  colorClass?: string;
}

const colorClasses = [
  "bg-vibrant-purple",
  "bg-vibrant-yellow",
  "bg-vibrant-coral",
  "bg-vibrant-mint",
  "bg-vibrant-blue",
  "bg-vibrant-orange",
  "bg-vibrant-lavender",
  "bg-vibrant-magenta",
];

const ProjectCard = ({ project, onClick, colorClass }: ProjectCardProps) => {
  const bgColor = colorClass || colorClasses[parseInt(project.id) % colorClasses.length];
  
  return (
    <article
      onClick={onClick}
      className={cn(
        "card-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full",
        bgColor
      )}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View project: ${project.title}`}
    >
      {/* Thumbnail */}
      <div className="aspect-[4/3] overflow-hidden p-4 md:p-5">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 grayscale"
            loading="lazy"
          />
          <div
            className={cn(
              "absolute inset-0 mix-blend-multiply opacity-60",
              bgColor
            )}
            aria-hidden="true"
          />
          {/* Embed indicator */}
          {project.embedType !== 'none' && (
            <div className="absolute top-3 right-3 bg-foreground text-background p-2 rounded-full">
              {project.embedType === 'pdf' ? (
                <FileText className="w-4 h-4" />
              ) : (
                <Presentation className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold uppercase tracking-wide bg-foreground/10 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl leading-[0.9] mb-3 font-sans font-extrabold tracking-tight">
          {project.title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-foreground/80 flex-1 font-serif">
          {project.summary}
        </p>
        
        <div className="mt-4 text-xs font-bold uppercase tracking-wide text-foreground/60">
          {project.createdAt}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
