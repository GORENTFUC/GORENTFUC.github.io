import { ArrowUpRight } from "lucide-react"
import { githubActivity } from "@/data/portfolio"

export function GithubPanel() {
  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      style={{
        paddingBlock: "var(--space-3xl)",
        paddingInline: "var(--margin-mobile)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--max-content-width)" }}>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <p className="font-label-sm" style={{ color: "var(--color-architectural-ochre)", margin: 0 }}>
            Telemetry
          </p>
          <h2
            id="github-heading"
            className="font-headline-lg"
            style={{ color: "var(--color-warm-cream)", margin: "0.5rem 0 0" }}
          >
            GitHub Status
          </h2>
        </header>

        <div
          style={{
            backgroundColor: "var(--color-recessed-tray)",
            border: "1px solid var(--color-recessed-border)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-tactile-inset)",
            overflow: "hidden",
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-3"
            style={{
              borderBottom: "1px solid var(--color-recessed-border)",
              padding: "var(--space-md) var(--space-lg)",
              backgroundColor: "var(--color-elevated-plate)",
            }}
          >
            <div>
              <p className="font-label-sm" style={{ color: "var(--color-text-muted)", margin: 0 }}>
                repository://{githubActivity.username}
              </p>
              <p className="font-title-md" style={{ color: "var(--color-warm-cream)", margin: "4px 0 0" }}>
                Activity Panel
              </p>
            </div>
            <a
              href={githubActivity.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-label-md"
              style={{ color: "var(--color-architectural-ochre)" }}
              aria-label="Abrir perfil de GitHub"
            >
              Ver perfil
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div style={{ padding: "var(--space-lg)" }}>
            <p className="font-body-md" style={{ color: "var(--color-text-secondary)", marginTop: 0 }}>
              {githubActivity.summary}
            </p>

            <dl
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              style={{ margin: "var(--space-lg) 0" }}
            >
              {githubActivity.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderBottom: "1px dotted var(--color-structural-slate)",
                    paddingBottom: "var(--space-sm)",
                  }}
                >
                  <dt className="font-label-sm" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                    {stat.label}
                  </dt>
                  <dd
                    className="font-title-md"
                    style={{ color: "var(--color-warm-cream)", margin: "4px 0 0" }}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="font-title-md" style={{ color: "var(--color-muted-earth-olive)", marginBottom: "var(--space-md)" }}>
              Repositorios destacados
            </h3>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--space-sm)" }}>
              {githubActivity.featuredRepos.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-1 transition-colors sm:flex-row sm:items-center sm:justify-between"
                    style={{
                      backgroundColor: "var(--color-surface-substrate)",
                      border: "var(--border-structural)",
                      borderRadius: "var(--radius-default)",
                      padding: "var(--space-md)",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.borderColor = "var(--color-architectural-ochre)"
                      event.currentTarget.style.backgroundColor = "var(--color-elevated-plate)"
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.borderColor = "var(--color-structural-slate)"
                      event.currentTarget.style.backgroundColor = "var(--color-surface-substrate)"
                    }}
                    aria-label={`Abrir repositorio ${repo.name}`}
                  >
                    <span>
                      <span className="font-title-md block" style={{ color: "var(--color-warm-cream)" }}>
                        {repo.name}
                      </span>
                      <span className="font-body-sm" style={{ color: "var(--color-text-secondary)" }}>
                        {repo.description}
                      </span>
                    </span>
                    <span
                      className="chip-featured font-label-sm inline-flex w-fit"
                      style={{ borderRadius: "var(--radius-default)", padding: "2px 8px" }}
                    >
                      {repo.language}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
