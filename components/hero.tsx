"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticlesBackground from "@/components/particles-background";

export default function Hero() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState("Success Bright");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/github-profile");
        if (response.ok) {
          const data = await response.json();
          setUsername(data.name || data.login);
        }
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="hero-gradient absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={item} className="text-white/70 font-medium mb-2">
            Professional Web Development Services
          </motion.h2>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            {username}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            Custom websites and web applications that help businesses grow their
            online presence
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              Get Started
            </a>

            <button
              onClick={scrollToAbout}
              className="minimal-button px-6 py-3 rounded-md"
            >
              <span className="flex items-center gap-2">
                Learn More{" "}
                <ArrowDown size={16} className="group-hover:animate-bounce" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown
          size={32}
          className="text-white/50 animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        />
      </motion.div>

      <div ref={aboutRef} className="absolute bottom-0"></div>
    </section>
  );
}
