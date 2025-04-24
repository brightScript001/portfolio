"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ContactInfoPanel from "@/components/contact-info-panel"

export default function Contact() {
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="minimal-card p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-[#1a1a1a]/50 border-white/10 text-white focus:border-white/30 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-[#1a1a1a]/50 border-white/10 text-white focus:border-white/30 focus:ring-white/20"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Subject"
                className="bg-[#1a1a1a]/50 border-white/10 text-white focus:border-white/30 focus:ring-white/20"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="bg-[#1a1a1a]/50 border-white/10 text-white focus:border-white/30 focus:ring-white/20 min-h-[120px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Button
                onClick={() => setIsContactInfoOpen(true)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Contact Info
              </Button>

              <Button className="minimal-button">
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {isContactInfoOpen && <ContactInfoPanel onClose={() => setIsContactInfoOpen(false)} />}
    </section>
  )
}
