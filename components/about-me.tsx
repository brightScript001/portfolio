"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Briefcase, GraduationCap } from "lucide-react"
import { aboutMe } from "@/config/content-config"

export default function AboutMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{aboutMe.headline}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="minimal-card p-6 lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Biography</h3>
            <div className="space-y-4">
              {aboutMe.bio.map((paragraph, index) => (
                <p key={index} className="text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="minimal-card p-6"
          >
            <div className="flex items-center mb-4">
              <Code className="mr-2 text-white" size={20} />
              <h3 className="text-xl font-bold text-white">Skills</h3>
            </div>
            <div className="space-y-4">
              {aboutMe.skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex}>
                  <h4 className="text-white font-medium mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="minimal-card p-6"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="mr-2 text-white" size={20} />
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              {aboutMe.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-white/20 pl-4 py-1">
                  <h4 className="text-white font-medium">{exp.position}</h4>
                  <p className="text-white/70 text-sm">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="minimal-card p-6"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="mr-2 text-white" size={20} />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {aboutMe.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-white/20 pl-4 py-1">
                  <h4 className="text-white font-medium">{edu.degree}</h4>
                  <p className="text-white/70 text-sm">
                    {edu.institution} | {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
