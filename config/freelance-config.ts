export interface ServiceConfig {
  title: string
  description: string
  icon: string // Lucide icon name
}

export interface FAQConfig {
  question: string
  answer: string
}

export interface TestimonialConfig {
  id: string
  name: string
  position: string
  company: string
  quote: string
  image: string
  linkedinUrl: string
}

export const aboutMe = {
  headline: "Senior Software Engineer",
  bio: [
    "I specialize in creating custom web solutions that help businesses grow their online presence and achieve their digital goals.",
    "With a focus on clean code, performance, and user experience, I deliver websites that not only look great but also drive results.",
    "My approach combines technical expertise with business understanding to create solutions that truly work for my clients.",
  ],
}

export const keyServices: ServiceConfig[] = [
  {
    title: "Custom Website Development",
    description: "Tailor-made websites designed to meet your specific business needs and goals.",
    icon: "Code",
  },
  {
    title: "E-commerce Solutions",
    description: "Powerful online stores that drive sales and provide excellent customer experiences.",
    icon: "ShoppingCart",
  },
  {
    title: "Web Application Development",
    description: "Custom web applications that automate processes and solve complex business problems.",
    icon: "AppWindow",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support and updates to keep your website secure, fast, and up-to-date.",
    icon: "Wrench",
  },
]

export const mission = {
  statement:
    "To empower businesses with custom web solutions that drive growth, enhance user experience, and deliver measurable results.",
}

export const vision = {
  statement:
    "To be the go-to web development partner for businesses seeking quality, reliability, and innovation in their digital presence.",
}

export const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Netlify", "GitHub Actions", "Figma"],
}

export const services = [
  {
    title: "Business Websites",
    description: "Professional websites that establish your online presence and help you reach more customers.",
    benefits: ["Increased visibility", "Professional brand image", "Mobile-friendly design", "SEO optimization"],
  },
  {
    title: "E-commerce Platforms",
    description: "Online stores that make selling your products easy and provide a seamless shopping experience.",
    benefits: ["Secure payment processing", "Inventory management", "Customer accounts", "Order tracking"],
  },
  {
    title: "Web Applications",
    description: "Custom applications that automate processes and provide solutions tailored to your business needs.",
    benefits: ["Process automation", "Data management", "User authentication", "Custom functionality"],
  },
  {
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, high-performing digital asset.",
    benefits: ["Improved user experience", "Faster loading times", "Modern design", "Better conversion rates"],
  },
]

export const testimonials: TestimonialConfig[] = [
  {
    id: "testimonial1",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "GrowthBrand",
    quote:
      "Working with this developer transformed our online presence. The website not only looks fantastic but has significantly improved our lead generation and customer engagement.",
    image: "/placeholder.svg?height=100&width=100",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
  },
  {
    id: "testimonial2",
    name: "Michael Chen",
    position: "E-commerce Manager",
    company: "RetailPlus",
    quote:
      "Our online store has never performed better. The attention to detail, focus on user experience, and technical expertise delivered exactly what we needed to increase our online sales.",
    image: "/placeholder.svg?height=100&width=100",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
  },
  {
    id: "testimonial3",
    name: "Emily Rodriguez",
    position: "Startup Founder",
    company: "InnovateTech",
    quote:
      "As a startup, we needed a website that could grow with us. The solution provided was not only beautiful but scalable, allowing us to expand our online presence as our business grows.",
    image: "/placeholder.svg?height=100&width=100",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
  },
]

export const faqs: FAQConfig[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline varies depending on the complexity of the project. A simple website typically takes 2-4 weeks, while more complex projects like e-commerce sites or web applications can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I offer transparent, project-based pricing rather than hourly rates. This means you'll know exactly what you're paying from the start. Prices vary based on project requirements, complexity, and features needed. Contact me for a personalized quote.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes, I offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. This includes regular updates, security monitoring, backups, and technical support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All websites I build are fully responsive and optimized for all devices, including smartphones, tablets, and desktops. This ensures your visitors have a great experience regardless of how they access your site.",
  },
  {
    question: "Can you help with SEO for my website?",
    answer:
      "Yes, I implement SEO best practices during development to ensure your website is optimized for search engines. This includes proper HTML structure, fast loading times, mobile optimization, and other technical SEO elements.",
  },
  {
    question: "What is the development process like?",
    answer:
      "My process includes: 1) Discovery and planning, 2) Design approval, 3) Development, 4) Testing and revisions, 5) Launch, and 6) Post-launch support. I maintain clear communication throughout each phase to ensure your vision is realized.",
  },
]

export const contactInfo = {
  headline: "Contact Us",
  subheadline: "Ready to create your dream website? Contact us! Let's bring your vision to life.",
  whatsapp: "+1234567890",
  email: "contact@example.com",
}
