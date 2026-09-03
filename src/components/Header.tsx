import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FolderKey, Menu, X } from "lucide-react"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        
        {/* Logo / Nombre */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <FolderKey className="h-6 w-6 text-primary" />
          <span>MiPortafolio</span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botones de acción / Redes Sociales */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            nativeButton={false}
            render={<a href="https://github.com" target="_blank" rel="noreferrer" />}
          >
            <GitHubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            nativeButton={false}
            render={<a href="https://linkedin.com" target="_blank" rel="noreferrer" />}
          >
            <LinkedInIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 pt-2 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2"
              nativeButton={false}
              render={<a href="https://github.com" target="_blank" rel="noreferrer" />}
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2"
              nativeButton={false}
              render={<a href="https://linkedin.com" target="_blank" rel="noreferrer" />}
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}