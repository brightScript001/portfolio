"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, ExternalLink } from "lucide-react"
import ProjectCard from "@/components/project-card"

// Types for GitHub projects
interface Project {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  updated_at: string
  language: string
  stargazers_count: number
  forks_count: number
  preview_url?: string
  featured?: boolean
  order?: number
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Fetch projects from GitHub API
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/github-projects")

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`)
        }

        const data = await response.json()

        if (data && Array.isArray(data) && data.length > 0) {
          setProjects(data)
        } else {
          // Fallback to demo projects if no data or empty array
          setProjects(demoProjects)
        }
      } catch (error) {
        console.error("Error fetching projects:", error)
        // Fallback to demo projects on error
        setProjects(demoProjects)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Demo projects for preview (will be replaced by actual GitHub data)
  const demoProjects: Project[] = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
      html_url: "https://github.com/github-user/ecommerce",
      homepage: "https://ecommerce-demo.vercel.app",
      topics: ["nextjs", "typescript", "stripe", "tailwindcss"],
      updated_at: "2023-10-15",
      language: "TypeScript",
      stargazers_count: 48,
      forks_count: 12,
      preview_url: "/placeholder.svg?height=400&width=600",
      featured: true,
      order: 1,
    },
    {
      id: 2,
      name: "Business Website",
      description: "A professional business website with blog, contact form, and custom animations.",
      html_url: "https://github.com/github-user/business-site",
      homepage: "https://business-demo.vercel.app",
      topics: ["react", "nextjs", "business", "responsive"],
      updated_at: "2023-09-20",
      language: "JavaScript",
      stargazers_count: 36,
      forks_count: 8,
      preview_url: "/placeholder.svg?height=400&width=600",
      featured: true,
      order: 2,
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      description: "A comprehensive dashboard for SaaS applications with analytics and user management.",
      html_url: "https://github.com/github-user/saas-dashboard",
      homepage: "https://saas-dashboard.vercel.app",
      topics: ["dashboard", "saas", "analytics", "nextjs"],
      updated_at: "2023-11-05",
      language: "TypeScript",
      stargazers_count: 72,
      forks_count: 15,
      preview_url: "/placeholder.svg?height=400&width=600",
      order: 3,
    },
    {
      id: 4,
      name: "Restaurant Website",
      description: "A responsive restaurant website with online ordering and reservation system.",
      html_url: "https://github.com/github-user/restaurant-site",
      homepage: "https://restaurant-demo.vercel.app",
      topics: ["restaurant", "booking", "responsive", "react"],
      updated_at: "2023-08-12",
      language: "JavaScript",
      stargazers_count: 24,
      forks_count: 6,
      preview_url: "/placeholder.svg?height=400&width=600",
      order: 4,
    },
  ]

  // Get all unique categories from projects (using topics)
  const allCategories = [
    ...new Set(
      (projects.length > 0 ? projects : demoProjects).flatMap((project) =>
        project.topics.filter((topic) =>
          ["business", "ecommerce", "portfolio", "blog", "dashboard", "restaurant", "saas"].includes(topic),
        ),
      ),
    ),
  ].sort()

  // Filter projects by category or featured status
  const filteredProjects =
    activeFilter === "all"
      ? projects.length > 0
        ? projects
        : demoProjects
      : activeFilter === "featured"
        ? (projects.length > 0 ? projects : demoProjects).filter((project) => project.featured)
        : (projects.length > 0 ? projects : demoProjects).filter((project) => project.topics.includes(activeFilter))

  return (
    <section id="projects" className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Portfolio</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A selection of websites and applications I've built for clients across various industries
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <motion.button
              onClick={() => setActiveFilter("all")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-full px-4 py-2 text-sm ${
                activeFilter === "all"
                  ? "bg-white text-black"
                  : "border border-white/20 text-white/80 hover:bg-white/10"
              }`}
            >
              All Projects
            </motion.button>

            <motion.button
              onClick={() => setActiveFilter("featured")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className={`rounded-full px-4 py-2 text-sm ${
                activeFilter === "featured"
                  ? "bg-white text-black"
                  : "border border-white/20 text-white/80 hover:bg-white/10"
              }`}
            >
              <Star size={14} className="inline mr-1" /> Featured
            </motion.button>

            {allCategories.map((category, index) => (
              <motion.button
                key={`category-${category}`}
                onClick={() => setActiveFilter(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * (index + 2) }}
                className={`rounded-full px-4 py-2 text-sm capitalize ${
                  activeFilter === category
                    ? "bg-white text-black"
                    : "border border-white/20 text-white/80 hover:bg-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white/70">No projects found with the selected filter.</p>
                <button onClick={() => setActiveFilter("all")} className="mt-4 minimal-button px-4 py-2 rounded-md">
                  View All Projects
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-4">
            Looking for a custom solution for your business? Let's discuss your project requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
          >
            <ExternalLink size={18} /> Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
