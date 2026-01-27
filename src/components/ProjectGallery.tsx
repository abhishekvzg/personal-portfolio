import { useState, useMemo } from "react";
import { projects, allTags, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "relevant";

const ProjectGallery = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setSelectedTags([]);

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag))
      );
    }

    // Sort
    if (sortBy === "newest") {
      result = [...result].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    // "relevant" keeps original order (curated relevance)

    return result;
  }, [selectedTags, sortBy]);

  return (
    <section className="px-5 md:px-20 py-12 md:py-16" id="projects">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Projects
        </h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-sm font-bold uppercase tracking-wide text-foreground/60">
            Filter:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 border-2 border-foreground",
                selectedTags.includes(tag)
                  ? "bg-foreground text-background"
                  : "bg-transparent hover:bg-foreground/10"
              )}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm font-bold uppercase tracking-wide text-foreground/60 hover:text-foreground underline decoration-2"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort Bar */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-wide text-foreground/60">
            Sort:
          </span>
          <button
            onClick={() => setSortBy("newest")}
            className={cn(
              "text-sm font-bold uppercase tracking-wide transition-opacity",
              sortBy === "newest" ? "underline decoration-2" : "opacity-60 hover:opacity-100"
            )}
          >
            Newest
          </button>
          <span className="text-foreground/30">|</span>
          <button
            onClick={() => setSortBy("relevant")}
            className={cn(
              "text-sm font-bold uppercase tracking-wide transition-opacity",
              sortBy === "relevant" ? "underline decoration-2" : "opacity-60 hover:opacity-100"
            )}
          >
            Relevant
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-foreground/60 mb-6">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-foreground/60 font-serif">
            No projects match your filters.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 text-sm font-bold uppercase tracking-wide underline decoration-2"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectGallery;
