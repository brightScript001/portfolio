"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
  stargazers_count: number
  forks_count: number
  preview_url?: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false)

  // Extract business-related topics for display
  const businessTopics = project.topics.filter((topic) =>
    ["business", "ecommerce", "portfolio", "blog", "dashboard", "restaurant", "saas"].includes(topic),
  )

  // Extract tech topics for display
  const techTopics = project.topics
    .filter(
      (topic) => !["business", "ecommerce", "portfolio", "blog", "dashboard", "restaurant", "saas"].includes(topic),
    )
    .slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="minimal-card card-hover h-full flex flex-col relative"
    >
      {project.featured && (
        <div className="absolute top-0 right-0 bg-white text-black text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-medium z-10">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.preview_url || "/placeholder.svg?height=400&width=600"}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-70"></div>

        {businessTopics.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {businessTopics.map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full capitalize"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-white/70 mb-4 flex-grow">{project.description}</p>

        {techTopics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techTopics.map((tech) => (
              <span key={tech} className="tag-chip text-xs">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-auto pt-4">
          <button onClick={() => setShowPreview(true)} className="minimal-button px-4 py-2 rounded text-sm">
            View Details
          </button>

          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white text-black px-4 py-2 rounded text-sm"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Project Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-4xl w-full bg-[#1a1a1a] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative aspect-video">
              <Image
                src={project.preview_url || "/placeholder.svg?height=400&width=600"}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h4 className="text-lg font-medium text-white mb-2">Project Overview</h4>
              <p className="text-white/70 mb-4">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-sm font-medium text-white/90 mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {techTopics.map((tech) => (
                      <span key={tech} className="tag-chip text-xs">
                        {tech}
                      </span>
                    ))}
                    <span className="tag-chip text-xs">{project.language}</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-white/90 mb-2">Project Type</h5>
                  <div className="flex flex-wrap gap-2">
                    {businessTopics.map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full capitalize">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded"
                  >
                    <ExternalLink size={16} className="mr-2 inline" /> Visit Live Site
                  </a>
                )}

                <a href="#contact" className="minimal-button px-4 py-2 rounded">
                  Request Similar Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
