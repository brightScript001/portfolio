"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"
import { services } from "@/config/freelance-config"

export default function DevelopmentServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services-detail" className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Website Development Services</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive web solutions designed to help your business succeed online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="minimal-card p-6"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-white/70 mb-4">{service.description}</p>

              <h4 className="text-sm font-medium text-white/90 mb-2">Key Benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <Check className="text-white mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
