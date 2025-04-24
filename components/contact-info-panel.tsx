"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { X, Mail, Phone, Twitter, Linkedin, Github, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactInfoPanelProps {
  onClose: () => void
}

export default function ContactInfoPanel({ onClose }: ContactInfoPanelProps) {
  // Close panel on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      value: "@username",
      href: "https://twitter.com/username",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Username",
      href: "https://linkedin.com/in/username",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "username",
      href: "https://github.com/username",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "WhatsApp",
      value: "+1 (555) 123-4567",
      href: "https://wa.me/15551234567",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="minimal-card p-6 max-w-md w-full h-full md:h-auto md:max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Contact Information</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white/70 hover:text-white hover:bg-transparent"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-4 rounded-lg bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-all duration-300 hover:scale-105 border border-white/10"
            >
              <div className="p-2 rounded-full bg-white/10 text-white mr-3">{item.icon}</div>
              <div>
                <p className="text-xs text-white/50">{item.label}</p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
