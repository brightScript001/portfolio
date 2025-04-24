"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PhoneIcon as WhatsApp } from "lucide-react"
import { contactInfo } from "@/config/freelance-config"

export default function CTABanner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`

  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto"
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready to start your project?</h2>
            <p className="text-white/70">Let's discuss how I can help bring your vision to life.</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
          >
            <WhatsApp size={18} />
            Contact Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
