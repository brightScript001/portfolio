"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { techStack } from "@/config/freelance-config"

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    { name: "Frontend", items: techStack.frontend },
    { name: "Backend", items: techStack.backend },
    { name: "Database", items: techStack.database },
    { name: "Tools", items: techStack.tools },
  ]

  return (
    <section id="tech-stack" className="w-full py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Tech Stack</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Modern technologies I use to build powerful, scalable web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="minimal-card p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                    className="px-3 py-2 bg-white/10 text-white/90 rounded-md text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
