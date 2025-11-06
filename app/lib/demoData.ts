export interface UserData {
  username: string
  name: string
  title: string
  bio: string
  location: string
  skills: string[]
  projects: Array<{
    title: string
    description: string
    image: string
    link: string
  }>
  socials: {
    linkedin: string
    github: string
    twitter: string
    email: string
  }
  themePreference: string
}

export const demoUserA: UserData = {
  username: "vinay",
  name: "Vinay Sharma",
  title: "Frontend Developer",
  bio: "I build modern, fast, accessible frontends that users love. Passionate about creating seamless user experiences with cutting-edge technologies.",
  location: "Bengaluru, India",
  skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
  projects: [
    {
      title: "AI Portfolio Builder",
      description: "A personalized portfolio builder powered by AI that creates stunning websites from resumes in seconds.",
      image: "/images/template-1.png",
      link: "#"
    },
    {
      title: "FinAnalytics Dashboard",
      description: "Real-time financial analytics dashboard for fintech companies with advanced data visualization.",
      image: "/images/template-2.png",
      link: "#"
    },
    {
      title: "E-Learning Platform",
      description: "Modern e-learning platform with interactive courses, progress tracking, and community features.",
      image: "/images/template-3.png",
      link: "#"
    }
  ],
  socials: {
    linkedin: "https://linkedin.com/in/vinaysharma",
    github: "https://github.com/vinaysharma",
    twitter: "https://twitter.com/vinaysharma",
    email: "vinay@example.com"
  },
  themePreference: "modern"
}

export const demoUserB: UserData = {
  username: "sarah",
  name: "Sarah Chen",
  title: "Full Stack Developer",
  bio: "Full-stack developer with a passion for building scalable web applications. I love working with modern technologies and solving complex problems.",
  location: "San Francisco, CA",
  skills: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
  projects: [
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with real-time insights and automated reporting.",
      image: "/images/template-2.png",
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management system with team features, time tracking, and project analytics.",
      image: "/images/template-1.png",
      link: "#"
    }
  ],
  socials: {
    linkedin: "https://linkedin.com/in/sarahchen",
    github: "https://github.com/sarahchen",
    twitter: "https://twitter.com/sarahchen",
    email: "sarah@example.com"
  },
  themePreference: "minimal"
}

export const demoTemplates = [
  {
    id: "modern01",
    name: "Modern Minimal",
    category: "Minimal",
    description: "Clean and minimal design perfect for developers",
    preview: "/images/template-1.png"
  },
  {
    id: "modern02",
    name: "Gradient Pro",
    category: "Modern",
    description: "Modern design with beautiful gradients and animations",
    preview: "/images/template-2.png"
  },
  {
    id: "pro03",
    name: "Executive Dark",
    category: "Pro",
    description: "Professional dark theme for senior developers",
    preview: "/images/template-3.png"
  },
  {
    id: "photo04",
    name: "Photo Focus",
    category: "Photo",
    description: "Photo-centric design for creative professionals",
    preview: "/images/template-1.png"
  }
]

// Mock parsed resume data for demonstration
export const mockParsedResume = {
  name: "John Doe",
  title: "Frontend Developer",
  bio: "Experienced frontend developer with 5+ years building modern web applications using React, TypeScript, and Node.js. Passionate about creating accessible, performant user experiences.",
  location: "San Francisco, CA",
  skills: ["React", "TypeScript", "JavaScript", "Next.js", "Node.js", "Tailwind CSS"],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/images/template-1.png",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates using Socket.io and React. Supports team collaboration and project tracking.",
      image: "/images/template-2.png",
      link: "#"
    }
  ],
  socials: {
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "john.doe@email.com"
  },
  themePreference: "modern"
}