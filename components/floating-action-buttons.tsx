"use client"

import { motion } from "framer-motion"
import { PhoneIcon as WhatsApp, Mail } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { contactInfo } from "@/config/freelance-config"

export default function FloatingActionButtons() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg"
            >
              <WhatsApp size={20} />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-[#1a1a1a] border border-white/10 text-white">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href={`mailto:${contactInfo.email}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg"
            >
              <Mail size={20} />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-[#1a1a1a] border border-white/10 text-white">
            <p>Send an Email</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
