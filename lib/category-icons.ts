import type { LucideIcon } from "lucide-react"
import {
  Atom,
  Bot,
  Braces,
  Cloud,
  Code,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Layout,
  Lock,
  Server,
  Users,
} from "lucide-react"

export const iconBySlug: Record<string, LucideIcon> = {
  python: FileCode2,
  react: Atom,
  javascript: Braces,
  ai: Bot,
  rust: Cpu,
  node: Server,
  frontend: Layout,
  laravel: Layers,
  php: Code,
  "soft-skills": Users,
  infrastructure: GitBranch,
  devops: Cloud,
  database: Database,
  security: Lock,
}

export const fallbackIcon: LucideIcon = Code
