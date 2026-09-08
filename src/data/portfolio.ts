export interface Project {
  id: string
  title: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  status: "active" | "featured"
  progress?: number
}

export interface Skill {
  id: string
  name: string
  levelValue: number
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
  location: "Colombia",
  cvUrl: "/cv-juan-sebastian-lizcano.pdf",
  githubUsername: "JSGOR",
} as const

export const currentProjects: Project[] = [
  {
    id: "current-portfolio",
    title: "mi-portafolio",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/JSGOR/mi-portafolio",
    liveUrl: "https://jsgor.dev",
    status: "active",
    progress: 72,
  },
  {
    id: "current-api-hub",
    title: "Forge API Hub",
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
    tags: ["React", "Firebase", "Zustand"],
    githubUrl: "https://github.com/JSGOR/blueprint-taskboard",
    liveUrl: "https://blueprint-taskboard.vercel.app",
    status: "featured",
  },
  {
    id: "featured-inventory",
    title: "Inventory Ledger",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/JSGOR/inventory-ledger",
    liveUrl: "https://inventory-ledger.vercel.app",
    status: "featured",
  },
]

export const skills: Skill[] = [
  { id: "fe-react", name: "React & Vite", levelValue: 9 },
  { id: "fe-ts", name: "TypeScript", levelValue: 9 },
  { id: "fe-tw", name: "Tailwind CSS", levelValue: 8 },
  { id: "be-node", name: "Node.js", levelValue: 8 },
  { id: "be-pg", name: "PostgreSQL", levelValue: 7 },
  { id: "tool-git", name: "Git & CI/CD", levelValue: 8 },
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
  heatmap: buildContributionHeatmap(52),
  featuredRepos: [
    {
      name: "mi-portafolio",
      url: "https://github.com/JSGOR/mi-portafolio",
      language: "TypeScript",
    },
    {
      name: "forge-api-hub",
      url: "https://github.com/JSGOR/forge-api-hub",
      language: "JavaScript",
    },
    {
      name: "scaffold-cli",
      url: "https://github.com/JSGOR/scaffold-cli",
      language: "TypeScript",
    },
  ],
} as const
