import { useEffect, useCallback } from "react";
import { X, ExternalLink, FileText, Presentation } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const renderEmbed = () => {
    if (project.embedType === "none" || !project.embedUrl) {
      return (
        <div className="bg-foreground/5 rounded-2xl p-8 text-center">
          <p className="text-foreground/60 font-serif text-lg">
            Detailed case study coming soon.
          </p>
          <p className="text-foreground/40 text-sm mt-2">
            Contact me for more information about this project.
          </p>
        </div>
      );
    }

    if (project.embedType === "pdf") {
      return (
        <div className="rounded-2xl overflow-hidden bg-foreground/5">
          <iframe
            src={project.embedUrl}
            className="w-full h-[500px] md:h-[600px]"
            title={`${project.title} PDF`}
            loading="lazy"
          />
        </div>
      );
    }

    if (project.embedType === "canva") {
      // Canva embed - adjust URL format as needed
      return (
        <div className="rounded-2xl overflow-hidden bg-foreground/5">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={project.embedUrl}
              className="absolute inset-0 w-full h-full"
              title={`${project.title} Canva Presentation`}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative bg-background rounded-3xl w-full max-w-4xl my-8 overflow-hidden",
          "animate-in fade-in-0 zoom-in-95 duration-300"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-foreground text-background p-3 rounded-full hover:opacity-80 transition-opacity"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 -mt-20 relative">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-foreground text-background text-xs font-bold uppercase tracking-wide rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2
            id="modal-title"
            className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
          >
            {project.title}
          </h2>

          <p className="text-foreground/60 text-sm font-bold uppercase tracking-wide mb-6">
            {project.createdAt}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-serif mb-8">
            {project.description}
          </p>

          {/* Embed Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              {project.embedType === "pdf" && (
                <>
                  <FileText className="w-5 h-5" />
                  <span className="font-bold uppercase text-sm tracking-wide">
                    Case Study
                  </span>
                </>
              )}
              {project.embedType === "canva" && (
                <>
                  <Presentation className="w-5 h-5" />
                  <span className="font-bold uppercase text-sm tracking-wide">
                    Presentation
                  </span>
                </>
              )}
            </div>
            {renderEmbed()}
          </div>

          {/* Actions */}
          {project.embedUrl && project.embedType !== "none" && (
            <div className="flex flex-wrap gap-4">
              <a
                href={project.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-filled text-sm"
              >
                Open Full Screen
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
