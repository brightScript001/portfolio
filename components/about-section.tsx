"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, MapPin, Users, Code } from "lucide-react";
import Image from "next/image";
import { aboutMe } from "@/config/freelance-config";

interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  location: string;
  followers: number;
  public_repos: number;
}

export default function AboutSection() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/github-profile");
        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
        // Fallback to demo profile
        setProfile({
          login: "brightScript001",
          avatar_url: "https://avatars.githubusercontent.com/u/12345678",
          html_url: "https://github.com/brightScript001",
          name: "Success Bright",
          bio: "Full-stack developer passionate about creating exceptional digital experiences",
          location: "Lagos, Nigeria",
          followers: 120,
          public_repos: 25,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <section id="about" className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {aboutMe.headline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* GitHub Profile Section */}
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : profile ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="minimal-card p-6 mb-8"
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
          ) : null}

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="minimal-card p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              Professional Overview
            </h3>
            <div className="space-y-4">
              {aboutMe.bio.map((paragraph, index) => (
                <p key={index} className="text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
