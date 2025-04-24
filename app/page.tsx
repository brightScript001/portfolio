import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import KeyServices from "@/components/key-services"
import MissionVision from "@/components/mission-vision"
import TechStack from "@/components/tech-stack"
import DevelopmentServices from "@/components/development-services"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CTABanner from "@/components/cta-banner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <AboutSection />
      <KeyServices />
      <MissionVision />
      <CTABanner />
      <TechStack />
      <DevelopmentServices />
      <Projects />
      <Testimonials />
      <CTABanner />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
