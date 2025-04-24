export interface ProjectConfig {
  // GitHub repository name (e.g., "my-awesome-project")
  repoName: string
  // Optional custom description to override the GitHub description
  customDescription?: string
  // Optional custom preview image URL
  previewImage?: string
  // Optional custom demo URL to override the GitHub homepage
  demoUrl?: string
  // Optional flag to feature this project (can be used for sorting/highlighting)
  featured?: boolean
  // Optional custom order for display (lower numbers appear first)
  order?: number
}

export const featuredProjects: ProjectConfig[] = [
  {
    repoName: "portfolio-website",
    featured: true,
    order: 1,
  },
  {
    repoName: "e-commerce-platform",
    customDescription: "A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration",
    featured: true,
    order: 2,
  },
  {
    repoName: "ai-image-generator",
    order: 3,
  },
  {
    repoName: "blockchain-explorer",
    order: 4,
  },
  // Add more projects as needed
]

// If this array is empty, the API will fall back to fetching your most recent repositories
// If you add repositories here, ONLY these repositories will be displayed
export const selectedProjects: string[] = [
  // Add repository names here, e.g.:
  // "portfolio-website",
  // "e-commerce-platform",
  // "ai-image-generator"
]
