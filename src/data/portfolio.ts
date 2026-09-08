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
}

export interface SocialLink {
  id: string
  label: string
  href: string
  platform: "github" | "linkedin" | "email"
}

export const profile = {
  name: "Juan Sebastián Lizcano Quevedo",
  alias: "@LizcanoDev",
  role: "Software Engineer / Full Stack Developer",
  statusBadge: "Ready for Player 2 (Hiring / Collaborating)",
  summary:
    "Construyo interfaces táctiles y sistemas backend con precisión arquitectónica. Obsesión por el detalle estructural, el código limpio y experiencias que se sienten machined.",
  location: "Colombia",
  cvUrl: "/cv-juan-sebastian-lizcano.pdf",
  githubUsername: "LizcanoDev",
} as const

export const currentProjects: Project[] = [
  {
    id: "current-portfolio",
    title: "mi-portafolio",
    description:
      "Portafolio personal con estética Tactile Architectural Minimalist. React, TypeScript y un sistema de tokens obsidian / ocre.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LizcanoDev/mi-portafolio",
    liveUrl: "https://lizcanodev.dev",
    status: "active",
    progress: 72,
  },
  {
    id: "current-api-hub",
    title: "Forge API Hub",
    description:
      "API gateway modular con autenticación JWT, rate limiting y paneles de telemetría para microservicios internos.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/LizcanoDev/forge-api-hub",
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
    githubUrl: "https://github.com/LizcanoDev/blueprint-taskboard",
    liveUrl: "https://blueprint-taskboard.vercel.app",
    status: "featured",
  },
  {
    id: "featured-inventory",
    title: "Inventory Ledger",
    description:
      "Sistema de inventario con métricas de stock, auditoría de movimientos y exportes CSV para operaciones pequeñas.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/LizcanoDev/inventory-ledger",
    liveUrl: "https://inventory-ledger.vercel.app",
    status: "featured",
  },
  {
    id: "featured-cli",
    title: "Scaffold CLI",
    description:
      "CLI para generar scaffolds tipados de proyectos React/Vite con tokens, linting y estructura de carpetas lista.",
    tags: ["TypeScript", "Node.js", "CLI"],
    githubUrl: "https://github.com/LizcanoDev/scaffold-cli",
    status: "featured",
  },
]

export const skills: Skill[] = [
  { id: "fe-react", name: "React", category: "Frontend", level: "Expert" },
  { id: "fe-ts", name: "TypeScript", category: "Frontend", level: "Expert" },
  { id: "fe-tw", name: "Tailwind CSS", category: "Frontend", level: "Expert" },
  { id: "fe-vite", name: "Vite", category: "Frontend", level: "Adept" },
  { id: "be-node", name: "Node.js", category: "Backend", level: "Expert" },
  { id: "be-express", name: "Express", category: "Backend", level: "Adept" },
  { id: "be-pg", name: "PostgreSQL", category: "Backend", level: "Adept" },
  { id: "be-prisma", name: "Prisma", category: "Backend", level: "Adept" },
  { id: "tool-git", name: "Git", category: "Tools", level: "Expert" },
  { id: "tool-docker", name: "Docker", category: "Tools", level: "Adept" },
  { id: "tool-figma", name: "Figma", category: "Tools", level: "Novice" },
  { id: "tool-ci", name: "CI/CD", category: "Tools", level: "Adept" },
]

export const socialLinks: SocialLink[] = [
  {
    id: "social-github",
    label: "GitHub",
    href: "https://github.com/LizcanoDev",
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

export const githubActivity = {
  username: "LizcanoDev",
  profileUrl: "https://github.com/LizcanoDev",
  summary:
    "Commits enfocados en frontend tipado, APIs modulares y refinamiento de sistemas de diseño.",
  stats: [
    { label: "Repos públicos", value: "24" },
    { label: "Contribuciones (año)", value: "680+" },
    { label: "Lenguaje principal", value: "TypeScript" },
    { label: "Estado", value: "Activo" },
  ],
  featuredRepos: [
    {
      name: "mi-portafolio",
      description: "Portafolio táctil con React + tokens arquitectónicos",
      url: "https://github.com/LizcanoDev/mi-portafolio",
      language: "TypeScript",
    },
    {
      name: "forge-api-hub",
      description: "Gateway modular con JWT y telemetría",
      url: "https://github.com/LizcanoDev/forge-api-hub",
      language: "JavaScript",
    },
    {
      name: "scaffold-cli",
      description: "Generador de scaffolds tipados para Vite",
      url: "https://github.com/LizcanoDev/scaffold-cli",
      language: "TypeScript",
    },
  ],
} as const

export const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contacto" },
] as const
