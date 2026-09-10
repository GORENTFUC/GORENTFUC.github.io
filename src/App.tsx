import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { SkillsInventory } from "@/components/SkillsInventory"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { AmbientBackground } from "@/components/AmbientBackground"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { useLocale } from "@/i18n"

export default function App() {
  const { t } = useLocale()
  useSmoothScroll(80)

  return (
    <div
      className="relative min-h-svh"
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-text-primary)" }}
    >
      <AmbientBackground />

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

      <div className="relative z-10 flex min-h-svh flex-col">
        <Navbar />

        <main className="mx-auto w-full flex-1" style={{ maxWidth: "var(--max-content-width)" }}>
          <Hero />
          <Projects />
          <SkillsInventory />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
