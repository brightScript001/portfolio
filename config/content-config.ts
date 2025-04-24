export interface AboutMeConfig {
  headline: string
  bio: string[]
  skills: {
    category: string
    items: string[]
  }[]
  education: {
    degree: string
    institution: string
    year: string
  }[]
  experience: {
    position: string
    company: string
    duration: string
    description: string
  }[]
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

export const aboutMe: AboutMeConfig = {
  headline: "Full-stack developer passionate about creating exceptional digital experiences",
  bio: [
    "I'm a software engineer with expertise in modern web technologies and a focus on creating clean, efficient, and user-friendly applications.",
    "With over 5 years of experience in the industry, I've worked on a variety of projects from e-commerce platforms to real-time analytics dashboards.",
    "I'm constantly learning and exploring new technologies to stay at the forefront of web development.",
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Vercel"],
    },
  ],
  education: [
    {
      degree: "M.S. Computer Science",
      institution: "University of Technology",
      year: "2018",
    },
    {
      degree: "B.S. Software Engineering",
      institution: "Tech Institute",
      year: "2016",
    },
  ],
  experience: [
    {
      position: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2020 - Present",
      description: "Leading the frontend development team, implementing modern web technologies and best practices.",
    },
    {
      position: "Full-stack Developer",
      company: "Digital Innovations",
      duration: "2018 - 2020",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB.",
    },
  ],
}

export const testimonials: TestimonialConfig[] = [
  {
    id: "testimonial1",
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechForward",
    quote:
      "One of the most talented developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
    image: "/placeholder.svg?height=100&width=100",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
  },
  {
    id: "testimonial2",
    name: "Michael Chen",
    position: "Product Manager",
    company: "InnovateCorp",
    quote:
      "Their ability to translate complex requirements into elegant solutions made our project a success. Highly recommended!",
    image: "/placeholder.svg?height=100&width=100",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
  },
  {
    id: "testimonial3",
    name: "Emily Rodriguez",
    position: "Design Director",
    company: "CreativeStudio",
    quote:
      "A rare combination of technical expertise and design sensibility. They consistently delivered beyond our expectations.",
    image: "/placeholder.svg?height=100&width=100",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
  },
  {
    id: "testimonial4",
    name: "David Kim",
    position: "Startup Founder",
    company: "NextGen Solutions",
    quote:
      "Working with them was a game-changer for our startup. They not only built our platform but also provided valuable insights that improved our product.",
    image: "/placeholder.svg?height=100&width=100",
    linkedinUrl: "https://linkedin.com/in/davidkim",
  },
]
