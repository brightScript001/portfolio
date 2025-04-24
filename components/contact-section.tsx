"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PhoneIcon as WhatsApp, Mail } from "lucide-react"
import { contactInfo } from "@/config/freelance-config"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`

  return (
    <section id="contact" className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{contactInfo.headline}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{contactInfo.subheadline}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="minimal-card p-8 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <WhatsApp size={32} className="text-white mb-3" />
                <h3 className="text-lg font-medium text-white mb-1">WhatsApp</h3>
                <p className="text-white/70">{contactInfo.whatsapp}</p>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Mail size={32} className="text-white mb-3" />
                <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                <p className="text-white/70">{contactInfo.email}</p>
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-white/90 transition-colors"
            >
              <WhatsApp size={20} />
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
