export interface Project {
  id: string
  title: string
  tags: string[]
  githubUrl?: string
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
  alias: "@GORENTFUC",
  role: "Software Engineer / Full Stack Developer",
  location: "Colombia",
  cvUrl: "/cv-juan-sebastian-lizcano.pdf",
  githubUsername: "GORENTFUC",
  githubUrl: "https://github.com/GORENTFUC",
} as const

export const currentProjects: Project[] = [
  {
    id: "current-portfolio",
    title: "mi-portafolio",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/GORENTFUC",
    liveUrl: "https://jsgor.dev",
    status: "active",
    progress: 72,
  },
  {
    id: "current-web-arcoiris",
    title: "Web Arcoiris",
    tags: ["React", "TypeScript", "UI"],
    status: "active",
  },
]

export const featuredProjects: Project[] = [
  {
    id: "featured-taskboard",
    title: "Blueprint Taskboard",
    tags: ["React", "Firebase", "Zustand"],
    status: "featured",
  },
  {
    id: "featured-inventory",
    title: "Inventory Ledger",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
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
    href: "https://github.com/GORENTFUC",
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

export const footerSocialLinks = socialLinks.filter((link) => link.platform !== "email")
