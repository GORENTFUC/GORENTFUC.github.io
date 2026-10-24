import type { Locale } from "./types"

type NavLink = { label: string; href: string }

type HeroStat = { label: string; value: string }

type ProjectCopy = { description: string }

type SkillCopy = {
  category: string
  level: string
  description: string
}

type GithubStat = { label: string; value: string }

type RepoCopy = { description: string }

export type Dictionary = {
  skipToContent: string
  language: {
    groupLabel: string
    es: string
    en: string
    switchToEs: string
    switchToEn: string
  }
  nav: {
    main: string
    mobile: string
    openMenu: string
    closeMenu: string
    homeAria: string
    links: NavLink[]
  }
  profile: {
    statusBadge: string
    summary: string
    heroEyebrow: string
    ctaProjects: string
    ctaContact: string
    heroStats: HeroStat[]
  }
  projects: {
    eyebrow: string
    title: string
    currentBuilds: string
    active: string
    featuredWork: string
    inProgress: string
    development: string
    liveDemo: string
    githubAria: (title: string) => string
    liveAria: (title: string) => string
    progressAria: (progress: number) => string
    byId: Record<string, ProjectCopy>
  }
  skills: {
    eyebrow: string
    title: string
    subtitle: string
    byId: Record<string, SkillCopy>
  }
  github: {
    eyebrow: string
    title: string
    summary: string
    heatmapTitle: string
    viewProfile: string
    viewProfileAria: string
    heatmapAria: string
    less: string
    more: string
    levelTitle: (level: number) => string
    featuredRepos: string
    openRepoAria: (name: string) => string
    stats: GithubStat[]
    reposByName: Record<string, RepoCopy>
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    channelsTitle: string
    channelsBody: string
    channelsAria: string
    openLinkAria: (label: string) => string
  }
  footer: {
    rights: (year: number, name: string) => string
    socialAria: string
  }
}

const es: Dictionary = {
  skipToContent: "Saltar al contenido",
  language: {
    groupLabel: "Idioma",
    es: "ES",
    en: "EN",
    switchToEs: "Cambiar a español",
    switchToEn: "Cambiar a inglés",
  },
  nav: {
    main: "Navegación principal",
    mobile: "Navegación móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    homeAria: "ir al inicio",
    links: [
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Inventario", href: "#skills" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  profile: {
    statusBadge: "Disponible",
    summary:
      "Diseño e implemento interfaces táctiles y sistemas full stack con precisión arquitectónica. Código limpio, estructura rigurosa y detalles que se sienten machined.",
    heroEyebrow: "Especificación del sistema",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
    heroStats: [
      { label: "Disciplina", value: "Full Stack / Sistemas UI" },
      { label: "Enfoque", value: "React · TypeScript · APIs" },
      { label: "Estado", value: "Contratación / Colaboración" },
      { label: "Zona horaria", value: "COT // Activo" },
    ],
  },
  projects: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos y arquitectura",
    currentBuilds: "En construcción",
    active: "Activo",
    featuredWork: "Destacados",
    inProgress: "En curso",
    development: "Desarrollo",
    liveDemo: "Demo en vivo",
    githubAria: (title) => `Ver ${title} en GitHub`,
    liveAria: (title) => `Abrir demo en vivo de ${title}`,
    progressAria: (progress) => `Progreso ${progress}%`,
    byId: {
      "current-portfolio": {
        description:
          "Portafolio personal con estética Tactile Architectural Minimalist. React, TypeScript y un sistema de tokens obsidian / ocre.",
      },
      "current-web-arcoiris": {
        description:
          "Sitio web de un jardín infantil. Sigue en desarrollo y el acceso permanece privado.",
      },
      "featured-taskboard": {
        description:
          "Tablero kanban minimalista con drag & drop, sincronización en tiempo real y vista de arquitectura de sprints.",
      },
      "featured-inventory": {
        description:
          "Sistema de inventario con métricas de stock, auditoría de movimientos y exportes CSV para operaciones pequeñas.",
      },
    },
  },
  skills: {
    eyebrow: "Inventario",
    title: "Inventario técnico",
    subtitle:
      "Stack organizado como inventario: ranuras claras, nivel por habilidad y rareza visible.",
    byId: {
      "fe-react": {
        category: "Frontend",
        level: "Experto",
        description: "Interfaces tipadas, composición limpia y performance consciente.",
      },
      "fe-ts": {
        category: "Frontend",
        level: "Experto",
        description: "Contratos estrictos, DX sólida y menos errores en runtime.",
      },
      "fe-tw": {
        category: "Frontend",
        level: "Experto",
        description: "Sistemas visuales densos sin sacrificar ritmo ni claridad.",
      },
      "be-node": {
        category: "Backend",
        level: "Experto",
        description: "APIs modulares, auth y servicios con foco en mantenibilidad.",
      },
      "be-pg": {
        category: "Backend",
        level: "Competente",
        description: "Modelado relacional, consultas eficientes y migraciones claras.",
      },
      "tool-git": {
        category: "Herramientas",
        level: "Experto",
        description: "Flujos de entrega, versionado disciplinado y automatización.",
      },
    },
  },
  github: {
    eyebrow: "Telemetría",
    title: "Actividad en GitHub",
    summary:
      "Actividad centrada en frontend tipado, APIs modulares y refinamiento de sistemas de diseño.",
    heatmapTitle: "Mapa de actividad",
    viewProfile: "Ver perfil",
    viewProfileAria: "Abrir perfil de GitHub",
    heatmapAria: "Mapa de contribuciones de GitHub del último año en tonos ocre",
    less: "Menos",
    more: "Más",
    levelTitle: (level) => `Nivel ${level}`,
    featuredRepos: "Repositorios destacados",
    openRepoAria: (name) => `Abrir repositorio ${name}`,
    stats: [
      { label: "Commits / año", value: "680+" },
      { label: "Repositorios", value: "24" },
      { label: "Lenguaje principal", value: "TypeScript" },
      { label: "Racha actual", value: "Activo" },
    ],
    reposByName: {
      "mi-portafolio": {
        description: "Portafolio táctil con React + tokens arquitectónicos",
      },
      "forge-api-hub": {
        description: "Gateway modular con JWT y telemetría",
      },
      "scaffold-cli": {
        description: "Generador de scaffolds tipados para Vite",
      },
    },
  },
  contact: {
    eyebrow: "Canal de señal",
    title: "Construyamos algo que perdure.",
    subtitle:
      "Para colaboraciones, oportunidades o proyectos, escríbeme por los canales directos.",
    channelsTitle: "Canales directos",
    channelsBody: "Puedes contactarme por estos canales.",
    channelsAria: "Redes sociales",
    openLinkAria: (label) => `Abrir ${label}`,
  },
  footer: {
    rights: (year, name) => `© ${year} ${name}. Todos los derechos reservados.`,
    socialAria: "Redes sociales del pie",
  },
}

const en: Dictionary = {
  skipToContent: "Skip to content",
  language: {
    groupLabel: "Language",
    es: "ES",
    en: "EN",
    switchToEs: "Switch to Spanish",
    switchToEn: "Switch to English",
  },
  nav: {
    main: "Main navigation",
    mobile: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: "go to top",
    links: [
      { label: "About", href: "#sobre-mi" },
      { label: "Projects", href: "#proyectos" },
      { label: "Inventory", href: "#skills" },
      { label: "Contact", href: "#contacto" },
    ],
  },
  profile: {
    statusBadge: "Available",
    summary:
      "I design and build tactile interfaces and full-stack systems with architectural precision. Clean code, rigorous structure, and details that feel machined.",
    heroEyebrow: "System Specification & Overview",
    ctaProjects: "Explore Projects",
    ctaContact: "Get in Touch",
    heroStats: [
      { label: "Discipline", value: "Full Stack / UI Systems" },
      { label: "Focus", value: "React · TypeScript · APIs" },
      { label: "Status", value: "Hiring / Collaborating" },
      { label: "Timezone", value: "COT // Active" },
    ],
  },
  projects: {
    eyebrow: "Selected Work",
    title: "Projects & Architecture",
    currentBuilds: "Current Builds",
    active: "Active",
    featuredWork: "Featured Work",
    inProgress: "In progress",
    development: "Development",
    liveDemo: "Live Demo",
    githubAria: (title) => `View ${title} on GitHub`,
    liveAria: (title) => `Open live demo of ${title}`,
    progressAria: (progress) => `Progress ${progress}%`,
    byId: {
      "current-portfolio": {
        description:
          "Personal portfolio with a Tactile Architectural Minimalist aesthetic. React, TypeScript, and an obsidian / ochre token system.",
      },
      "current-web-arcoiris": {
        description:
          "Website for a kindergarten. Still in development, with access kept private.",
      },
      "featured-taskboard": {
        description:
          "Minimal kanban board with drag & drop, real-time sync, and a sprint architecture view.",
      },
      "featured-inventory": {
        description:
          "Inventory system with stock metrics, movement auditing, and CSV exports for small operations.",
      },
    },
  },
  skills: {
    eyebrow: "Game Inventory",
    title: "Technical Inventory",
    subtitle:
      "Stack organized as inventory: clear slots, per-skill level, and visible rarity.",
    byId: {
      "fe-react": {
        category: "Frontend",
        level: "Expert",
        description: "Typed interfaces, clean composition, and performance-conscious builds.",
      },
      "fe-ts": {
        category: "Frontend",
        level: "Expert",
        description: "Strict contracts, solid DX, and fewer runtime surprises.",
      },
      "fe-tw": {
        category: "Frontend",
        level: "Expert",
        description: "Dense visual systems without sacrificing rhythm or clarity.",
      },
      "be-node": {
        category: "Backend",
        level: "Expert",
        description: "Modular APIs, auth, and services focused on maintainability.",
      },
      "be-pg": {
        category: "Backend",
        level: "Adept",
        description: "Relational modeling, efficient queries, and clear migrations.",
      },
      "tool-git": {
        category: "Tools",
        level: "Expert",
        description: "Delivery flows, disciplined versioning, and automation.",
      },
    },
  },
  github: {
    eyebrow: "Telemetry",
    title: "GitHub Activity",
    summary:
      "Activity focused on typed frontend, modular APIs, and design-system refinement.",
    heatmapTitle: "Activity Heatmap",
    viewProfile: "View profile",
    viewProfileAria: "Open GitHub profile",
    heatmapAria: "GitHub contribution heatmap for the last year in ochre tones",
    less: "Less",
    more: "More",
    levelTitle: (level) => `Level ${level}`,
    featuredRepos: "Featured repositories",
    openRepoAria: (name) => `Open repository ${name}`,
    stats: [
      { label: "Commits / Year", value: "680+" },
      { label: "Repositories", value: "24" },
      { label: "Primary Language", value: "TypeScript" },
      { label: "Current Streak", value: "Active" },
    ],
    reposByName: {
      "mi-portafolio": {
        description: "Tactile portfolio with React + architectural tokens",
      },
      "forge-api-hub": {
        description: "Modular gateway with JWT and telemetry",
      },
      "scaffold-cli": {
        description: "Typed scaffold generator for Vite projects",
      },
    },
  },
  contact: {
    eyebrow: "Signal Channel",
    title: "Let's construct something timeless.",
    subtitle:
      "For collaborations, opportunities, or projects, reach me through the direct channels.",
    channelsTitle: "Direct channels",
    channelsBody: "You can reach me through these channels.",
    channelsAria: "Social links",
    openLinkAria: (label) => `Open ${label}`,
  },
  footer: {
    rights: (year, name) => `© ${year} ${name}. All rights reserved.`,
    socialAria: "Footer social links",
  },
}

export const dictionaries: Record<Locale, Dictionary> = { es, en }
