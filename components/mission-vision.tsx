"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Eye } from "lucide-react"
import { mission, vision } from "@/config/freelance-config"

export default function MissionVision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="mission-vision" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="minimal-card p-6 flex flex-col h-full"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Mission</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed flex-grow">{mission.statement}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="minimal-card p-6 flex flex-col h-full"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Eye className="text-white" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Vision</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed flex-grow">{vision.statement}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
