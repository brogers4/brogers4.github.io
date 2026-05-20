export interface Project {
  id: string
  title: string
  shortTitle: string
  thumbnailImage: string
  thumbnailPosition?: string
  images: string[]
  description: string
  impact: string[]
  tags: string[]
}

export interface Role {
  id: string
  era: string
  years: string
  title: string
  company: string
  location: string
  summary: string
  projects: Project[]
}

export interface Competency {
  title: string
  description: string
  icon: string
}
