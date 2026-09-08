import { ArrowUpRight, FolderGit2 } from "lucide-react"
import {
  currentProjects,
  featuredProjects,
  type Project,
} from "@/data/portfolio"

function TechChip({ label, featured = false }: { label: string; featured?: boolean }) {
  return (
    <span
      className={`font-label-sm inline-flex ${featured ? "chip-featured" : "chip-neutral"}`}
      style={{
        borderRadius: "var(--radius-default)",
        padding: "2px 8px",
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isActive = project.status === "active"

  return (
    <article
      className="group flex h-full flex-col"
      style={{
        backgroundColor: "var(--color-elevated-plate)",
        border: "var(--border-structural)",
        borderRadius: "var(--radius-default)",
        boxShadow: "var(--shadow-tactile-inset)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "2px",
          backgroundColor: isActive
            ? "var(--color-muted-earth-olive)"
            : "var(--color-architectural-ochre)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", gap: "var(--space-md)", flex: 1 }}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-title-lg" style={{ color: "var(--color-warm-cream)", margin: 0 }}>
            {project.title}
          </h3>
          {isActive ? (
            <span
              className="chip-status font-label-sm inline-flex items-center gap-1.5 shrink-0"
              style={{ borderRadius: "var(--radius-default)", padding: "2px 8px" }}
            >
              <span
                className="inline-block h-1.5 w-1.5 animate-pulse"
                style={{
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--color-muted-earth-olive)",
                }}
                aria-hidden="true"
              />
              En curso
            </span>
          ) : null}
        </div>

        <p className="font-body-md" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
          {project.description}
        </p>

        {typeof project.progress === "number" ? (
          <div aria-label={`Progreso ${project.progress}%`}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-label-sm" style={{ color: "var(--color-text-muted)" }}>
                Progress
              </span>
              <span className="font-label-sm" style={{ color: "var(--color-muted-earth-olive)" }}>
                {project.progress}%
              </span>
            </div>
            <div
              style={{
                height: "4px",
                backgroundColor: "var(--color-structural-slate)",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${project.progress}%`,
                  height: "100%",
                  backgroundColor: "var(--color-muted-earth-olive)",
                }}
              />
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <TechChip key={tag} label={tag} featured={index === 0} />
          ))}
        </div>

        <div
          className="mt-auto flex flex-wrap gap-3"
          style={{
            borderTop: "var(--border-structural)",
            paddingTop: "var(--space-md)",
          }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-label-md transition-colors"
            style={{ color: "var(--color-text-secondary)" }}
            onMouseEnter={(event) => {
              event.currentTarget.style.color = "var(--color-architectural-ochre-hover)"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.color = "var(--color-text-secondary)"
            }}
            aria-label={`Ver ${project.title} en GitHub`}
          >
            <FolderGit2 size={15} aria-hidden="true" />
            GitHub
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-label-md transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = "var(--color-architectural-ochre-hover)"
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = "var(--color-text-secondary)"
              }}
              aria-label={`Abrir demo en vivo de ${project.title}`}
            >
              <ArrowUpRight size={15} aria-hidden="true" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      style={{
        paddingBlock: "var(--space-3xl)",
        paddingInline: "var(--margin-mobile)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--max-content-width)" }}>
        <header style={{ marginBottom: "var(--space-2xl)" }}>
          <p className="font-label-sm" style={{ color: "var(--color-architectural-ochre)", margin: 0 }}>
            Selected Work
          </p>
          <h2
            id="projects-heading"
            className="font-headline-lg"
            style={{ color: "var(--color-warm-cream)", margin: "0.5rem 0 0" }}
          >
            Proyectos
          </h2>
        </header>

        <div style={{ display: "grid", gap: "var(--space-2xl)" }}>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <h3 className="font-title-lg" style={{ color: "var(--color-warm-cream)", margin: 0 }}>
                Proyectos Actuales
              </h3>
              <span
                className="chip-status font-label-sm"
                style={{ borderRadius: "var(--radius-default)", padding: "2px 8px" }}
              >
                Active build
              </span>
            </div>
            <ProjectGrid projects={currentProjects} />
          </div>

          <div
            style={{
              borderTop: "var(--border-structural)",
              paddingTop: "var(--space-2xl)",
            }}
          >
            <h3 className="font-title-lg mb-4" style={{ color: "var(--color-warm-cream)", marginTop: 0 }}>
              Proyectos Destacados
            </h3>
            <ProjectGrid projects={featuredProjects} />
          </div>
        </div>
      </div>
    </section>
  )
}
