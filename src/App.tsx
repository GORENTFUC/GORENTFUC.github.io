import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { SkillsInventory } from "@/components/SkillsInventory"
import { GithubPanel } from "@/components/GithubPanel"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { useLocale } from "@/i18n"

export default function App() {
  const { t } = useLocale()

  return (
    <div
      className="min-h-svh"
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-text-primary)" }}
    >
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:px-3 focus:py-2"
        style={{
          backgroundColor: "var(--color-architectural-ochre)",
          color: "var(--color-on-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        {t.skipToContent}
      </a>

      <Navbar />

      <div className="mx-auto w-full" style={{ maxWidth: "var(--max-content-width)" }}>
        <main>
          <Hero />
          <Projects />
          <SkillsInventory />
          <GithubPanel />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
