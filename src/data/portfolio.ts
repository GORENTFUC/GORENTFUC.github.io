export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  status: "active" | "featured"
  progress?: number
}

export interface Skill {
  id: string
  name: string
  category: "Frontend" | "Backend" | "Tools"
  level: "Novice" | "Adept" | "Expert"
  levelValue: number
  description: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  platform: "github" | "linkedin" | "email"
}

export const profile = {
  name: "Juan Sebastian Lizcano Quevedo",
  shortName: "J. Lizcano",
  alias: "@JSGOR",
  role: "Software Engineer / Full Stack Developer",
  statusBadge: "Availability: Open",
  summary:
    "Diseño e implemento interfaces táctiles y sistemas full stack con precisión arquitectónica. Código limpio, estructura rigurosa y detalles que se sienten machined.",
  location: "Colombia",
  cvUrl: "/cv-juan-sebastian-lizcano.pdf",
  githubUsername: "JSGOR",
  heroStats: [
    { label: "Discipline", value: "Full Stack / UI Systems" },
    { label: "Focus", value: "React · TypeScript · APIs" },
    { label: "Status", value: "Hiring / Collaborating" },
    { label: "Timezone", value: "COT // Active" },
  ],
} as const

export const currentProjects: Project[] = [
  {
    id: "current-portfolio",
    title: "mi-portafolio",
    description:
      "Portafolio personal con estética Tactile Architectural Minimalist. React, TypeScript y un sistema de tokens obsidian / ocre.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/JSGOR/mi-portafolio",
    liveUrl: "https://jsgor.dev",
    status: "active",
    progress: 72,
  },
  {
    id: "current-api-hub",
    title: "Forge API Hub",
    description:
      "API gateway modular con autenticación JWT, rate limiting y paneles de telemetría para microservicios internos.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/JSGOR/forge-api-hub",
    status: "active",
    progress: 58,
  },
]

export const featuredProjects: Project[] = [
  {
    id: "featured-taskboard",
    title: "Blueprint Taskboard",
    description:
      "Tablero kanban minimalista con drag & drop, sincronización en tiempo real y vista de arquitectura de sprints.",
    tags: ["React", "Firebase", "Zustand"],
    githubUrl: "https://github.com/JSGOR/blueprint-taskboard",
    liveUrl: "https://blueprint-taskboard.vercel.app",
    status: "featured",
  },
  {
    id: "featured-inventory",
    title: "Inventory Ledger",
    description:
      "Sistema de inventario con métricas de stock, auditoría de movimientos y exportes CSV para operaciones pequeñas.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/JSGOR/inventory-ledger",
    liveUrl: "https://inventory-ledger.vercel.app",
    status: "featured",
  },
]

export const skills: Skill[] = [
  {
    id: "fe-react",
    name: "React & Vite",
    category: "Frontend",
    level: "Expert",
    levelValue: 9,
    description: "Interfaces tipadas, composición limpia y performance consciente.",
  },
  {
    id: "fe-ts",
    name: "TypeScript",
    category: "Frontend",
    level: "Expert",
    levelValue: 9,
    description: "Contratos estrictos, DX sólida y menos errores en runtime.",
  },
  {
    id: "fe-tw",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    levelValue: 8,
    description: "Sistemas visuales densos sin sacrificar ritmo ni claridad.",
  },
  {
    id: "be-node",
    name: "Node.js",
    category: "Backend",
    level: "Expert",
    levelValue: 8,
    description: "APIs modulares, auth y servicios con foco en mantenibilidad.",
  },
  {
    id: "be-pg",
    name: "PostgreSQL",
    category: "Backend",
    level: "Adept",
    levelValue: 7,
    description: "Modelado relacional, consultas eficientes y migraciones claras.",
  },
  {
    id: "tool-git",
    name: "Git & CI/CD",
    category: "Tools",
    level: "Expert",
    levelValue: 8,
    description: "Flujos de entrega, versionado disciplinado y automatización.",
  },
]

export const socialLinks: SocialLink[] = [
  {
    id: "social-github",
    label: "GitHub",
    href: "https://github.com/JSGOR",
    platform: "github",
  },
  {
    id: "social-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-sebastian-lizcano-quevedo-b3623a236",
    platform: "linkedin",
  },
  {
    id: "social-email",
    label: "Email",
    href: "mailto:juan.lizcano.dev@gmail.com",
    platform: "email",
  },
]

/** Deterministic contribution levels (0–4) for a 52×7 heatmap. */
export function buildContributionHeatmap(weeks = 52): number[][] {
  const columns: number[][] = []

  for (let week = 0; week < weeks; week += 1) {
    const days: number[] = []
    for (let day = 0; day < 7; day += 1) {
      const seed = (week * 17 + day * 31 + 11) % 100
      if (seed < 28) days.push(0)
      else if (seed < 48) days.push(1)
      else if (seed < 68) days.push(2)
      else if (seed < 86) days.push(3)
      else days.push(4)
    }
    columns.push(days)
  }

  return columns
}

export const githubActivity = {
  username: "JSGOR",
  profileUrl: "https://github.com/JSGOR",
  summary:
    "Actividad centrada en frontend tipado, APIs modulares y refinamiento de sistemas de diseño.",
  heatmap: buildContributionHeatmap(52),
  stats: [
    { label: "Commits / Year", value: "680+" },
    { label: "Repositories", value: "24" },
    { label: "Primary Language", value: "TypeScript" },
    { label: "Current Streak", value: "Active" },
  ],
  featuredRepos: [
    {
      name: "mi-portafolio",
      description: "Portafolio táctil con React + tokens arquitectónicos",
      url: "https://github.com/JSGOR/mi-portafolio",
      language: "TypeScript",
    },
    {
      name: "forge-api-hub",
      description: "Gateway modular con JWT y telemetría",
      url: "https://github.com/JSGOR/forge-api-hub",
      language: "JavaScript",
    },
    {
      name: "scaffold-cli",
      description: "Generador de scaffolds tipados para Vite",
      url: "https://github.com/JSGOR/scaffold-cli",
      language: "TypeScript",
    },
  ],
} as const

export const navLinks = [
  { label: "01 About", href: "#sobre-mi" },
  { label: "02 Projects", href: "#proyectos" },
  { label: "03 Inventory", href: "#skills" },
  { label: "04 Contact", href: "#contacto" },
] as const
