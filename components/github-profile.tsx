"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, MapPin, Users, Code } from "lucide-react"
import Image from "next/image"

interface GitHubProfile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  location: string
  followers: number
  public_repos: number
}

export default function GitHubProfile() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/github-profile")
        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`)
        }
        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error("Error fetching GitHub profile:", error)
        // Fallback to demo profile
        setProfile({
          login: "github-user",
          avatar_url: "https://avatars.githubusercontent.com/u/12345678",
          html_url: "https://github.com/github-user",
          name: "GitHub User",
          bio: "Full-stack developer passionate about creating exceptional digital experiences",
          location: "San Francisco, CA",
          followers: 120,
          public_repos: 25,
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!profile) return null

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="minimal-card p-6 mb-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#2a2a2a]"
        >
          <Image
            src={profile.avatar_url || "/placeholder.svg"}
            alt={profile.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold mb-2 text-white"
          >
            {profile.name || profile.login}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/80 mb-4"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-4"
          >
            {profile.location && (
              <div className="flex items-center gap-1 text-sm text-white/70">
                <MapPin size={16} className="text-white/50" />
                {profile.location}
              </div>
            )}
            <div className="flex items-center gap-1 text-sm text-white/70">
              <Users size={16} className="text-white/50" />
              {profile.followers} followers
            </div>
            <div className="flex items-center gap-1 text-sm text-white/70">
              <Code size={16} className="text-white/50" />
              {profile.public_repos} repositories
            </div>
          </motion.div>

          <motion.a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 minimal-button px-4 py-2 rounded-md"
          >
            <Github size={16} />
            View GitHub Profile
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
