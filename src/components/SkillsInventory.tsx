import { skills, type Skill } from "@/data/portfolio"

const categories: Skill["category"][] = ["Frontend", "Backend", "Tools"]

const levelTone: Record<Skill["level"], string> = {
  Novice: "var(--color-text-muted)",
  Adept: "var(--color-architectural-ochre)",
  Expert: "var(--color-muted-earth-olive)",
}

export function SkillsInventory() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      style={{
        paddingBlock: "var(--space-3xl)",
        paddingInline: "var(--margin-mobile)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--max-content-width)" }}>
        <header style={{ marginBottom: "var(--space-2xl)" }}>
          <p className="font-label-sm" style={{ color: "var(--color-architectural-ochre)", margin: 0 }}>
            Game Inventory
          </p>
          <h2
            id="skills-heading"
            className="font-headline-lg"
            style={{ color: "var(--color-warm-cream)", margin: "0.5rem 0 0" }}
          >
            Skills
          </h2>
          <p className="font-body-md mt-3 max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
            Stack organizado como inventario técnico: ranuras claras, rareza por nivel y categorías
            separadas por marco estructural.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {categories.map((category) => {
            const items = skills.filter((skill) => skill.category === category)

            return (
              <section
                key={category}
                aria-labelledby={`skills-${category}`}
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  border: "var(--border-structural)",
                  borderRadius: "var(--radius-default)",
                  boxShadow: "var(--shadow-tactile-inset)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="flex items-center justify-between"
                  style={{
                    borderBottom: "var(--border-structural)",
                    padding: "var(--space-md)",
                    backgroundColor: "var(--color-surface-container-low)",
                  }}
                >
                  <h3
                    id={`skills-${category}`}
                    className="font-title-md"
                    style={{ color: "var(--color-warm-cream)", margin: 0 }}
                  >
                    {category}
                  </h3>
                  <span className="font-label-sm" style={{ color: "var(--color-text-muted)" }}>
                    {items.length} slots
                  </span>
                </div>

                <ul className="grid grid-cols-2 gap-2" style={{ listStyle: "none", margin: 0, padding: "var(--space-md)" }}>
                  {items.map((skill) => (
                    <li
                      key={skill.id}
                      style={{
                        backgroundColor: "var(--color-elevated-plate)",
                        border: "var(--border-structural)",
                        borderRadius: "var(--radius-default)",
                        padding: "var(--space-sm)",
                      }}
                    >
                      <p className="font-label-md" style={{ color: "var(--color-warm-cream)", margin: 0 }}>
                        {skill.name}
                      </p>
                      <p
                        className="font-label-sm"
                        style={{ color: levelTone[skill.level], margin: "4px 0 0" }}
                      >
                        {skill.level}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
