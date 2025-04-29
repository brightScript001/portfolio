export interface ServiceConfig {
  title: string;
  description: string;
  icon: string;
}

export interface FAQConfig {
  question: string;
  answer: string;
}

export interface TestimonialConfig {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  linkedinUrl: string;
}

export const aboutMe = {
  headline: "Senior Freelance Software Engineer",
  bio: [
    `As a freelance full-stack software engineer with over six years of hands-on industry experience, 
I specialize in building clean, responsive, and secure software solutions that solve real-world business challenges. 
I bring a deep understanding of both frontend and backend development, with expertise in the MERN stack 
(MongoDB, Express, React, Node.js), Web3 technologies, and API integration—allowing me to deliver powerful, 
end-to-end applications that are both scalable and user-friendly.`,

    `I work closely with clients to understand their goals and turn ideas into fully functional digital products. 
Whether it's a custom website, a complex web application, a blockchain-integrated platform, or an e-commerce solution, 
I deliver code that is well-tested, performance-optimized, and easy to maintain. My background in object-oriented 
programming ensures structure and clarity in every project.`,

    `What sets me apart is not just my technical ability but my commitment to delivering real value. 
I’m a strong communicator, attentive to details, and highly collaborative. I thrive in agile workflows and stay focused 
on practical innovation—choosing lasting solutions over fleeting trends. I’ve contributed to projects for high-impact 
organizations, helping improve system performance, boost user engagement, and drive measurable growth.`,

    `If you’re looking for a reliable, proactive, and versatile software engineer to elevate your digital presence 
or bring your next idea to life I’m here to deliver.`,
  ],
};


export const keyServices: ServiceConfig[] = [
  {
    title: "Custom Website Development",
    description:
      "Your website is often the first impression customers will have of your business, and we want to make sure it’s a great one. We specialize in building tailor-made websites from the ground up, designed specifically for your business goals, industry, and target audience. Whether you're a local shop, a professional service provider, or a growing brand, we work closely with you to create a site that looks beautiful, works smoothly on all screen sizes (phones, tablets, computers), and is easy for visitors to navigate. We also make sure it’s optimized for search engines like Google, so more people can find you online. Everything we build is done with your success in mind.",
    icon: "Code",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Selling online doesn’t have to be complicated. We build powerful and user-friendly e-commerce websites that help you sell your products or services with ease. Whether you're just starting your first online store or looking to improve your current one, we take care of everything from setting up secure payment methods and managing inventory to designing a clean, intuitive shopping experience that builds trust and encourages repeat customers. Our goal is to help you increase sales, reduce manual work, and provide your customers with a smooth and enjoyable online shopping journey.",
    icon: "ShoppingCart",
  },
  {
    title: "Web Application Development",
    description:
      "Sometimes, a simple website isn’t enough for what your business needs. That’s where web applications come in. We create advanced online tools such as customer portals, booking systems, dashboards, internal management systems, and more that help your business run more efficiently. These custom-built applications are designed to fit perfectly with your existing workflow, allowing you to automate tasks, manage data securely, and improve communication with your team or customers. Everything is built with simplicity in mind, so it’s easy to use even if you’re not tech-savvy.",
    icon: "AppWindow",
  },
  {
    title: "Website Maintenance",
    description:
      "Just like a car needs regular servicing to run smoothly, your website needs ongoing care to stay secure, fast, and up-to-date. We offer continuous website maintenance services so you don’t have to worry about the technical stuff. This includes updating software, fixing bugs, monitoring security, making small content changes, and improving performance. If something breaks or slows down, we’re here to fix it quickly. Our goal is to give you peace of mind knowing that your website is always working at its best and representing your business professionally at all times.",
    icon: "Wrench",
  },
];

export const mission = {
  statement:
    "Our mission is to empower businesses big or small—by delivering thoughtful, easy-to-use digital experiences that work. We believe that every business deserves a strong online presence that reflects its true value and speaks clearly to its audience. Through custom websites and applications, we aim to simplify the web for our clients while helping them reach more people, operate more efficiently, and grow confidently in the digital space.",
};

export const vision = {
  statement:
    "We envision a digital world where business owners don’t need to be tech experts to succeed online. Our goal is to become the trusted web partner that companies can rely on for honest advice, quality work, and long-term support. By combining creativity with clear communication and practical solutions, we want to redefine how web development is experienced, making it more human, more helpful, and more accessible to everyone.",
};

export const techStack = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Framer Motion",
  ],
  backend: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  tools: [
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "GitHub Actions",
    "Figma",
  ],
};

export const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites that establish your online presence and help you reach more customers.",
    benefits: [
      "Increased visibility",
      "Professional brand image",
      "Mobile-friendly design",
      "SEO optimization",
    ],
  },
  {
    title: "E-commerce Platforms",
    description:
      "Online stores that make selling your products easy and provide a seamless shopping experience.",
    benefits: [
      "Secure payment processing",
      "Inventory management",
      "Customer accounts",
      "Order tracking",
    ],
  },
  {
    title: "Web Applications",
    description:
      "Custom applications that automate processes and provide solutions tailored to your business needs.",
    benefits: [
      "Process automation",
      "Data management",
      "User authentication",
      "Custom functionality",
    ],
  },
  {
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, high-performing digital asset.",
    benefits: [
      "Improved user experience",
      "Faster loading times",
      "Modern design",
      "Better conversion rates",
    ],
  },
];

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
];

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
];

export const contactInfo = {
  headline: "Contact Us",
  subheadline:
    "Ready to create your dream website? Contact us! Let's bring your vision to life.",
  whatsapp: "+1234567890",
  email: "contact@example.com",
};
