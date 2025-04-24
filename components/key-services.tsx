"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, ShoppingCart, AppWindow, Wrench } from "lucide-react"
import { keyServices } from "@/config/freelance-config"

// Map string icon names to actual components
const iconMap = {
  Code: Code,
  ShoppingCart: ShoppingCart,
  AppWindow: AppWindow,
  Wrench: Wrench,
}

export default function KeyServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="w-full py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Services</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Specialized solutions tailored to meet your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="minimal-card p-6 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-white/10 mr-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/70 flex-grow">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
