import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Cloud,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X,
  Cpu
} from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const portfolioData = {
    name: 'ปัณณวัฒน์ เลิศโกเมนกุล',
    jobTitle: 'IoT Engineer & Full-Stack Developer (Junior)',

    education: [
      {
        institution: 'Suankularb Wittayalai Thonburi School',
        degree: 'High School',
        gpax: '3.46',
        logo: 'https://sk-thonburi.ac.th/wp-content/uploads/2025/07/logo-1022x1024.png'
      },
      {
        institution: "King Mongkut's Institute of Technology Ladkrabang",
        degree: 'Bachelor of Science in Computer Science',
        gpax: '2.xx',
        logo: 'https://old-engineer.kmitl.ac.th/wp-content/uploads/2019/03/logo02-300x270.png'
      }
    ],

    skills: {
      frontend: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      backend: ['Express', 'Go', 'FastAPI', 'PHP'],
      frameworks: ['React', 'Svelte', 'Next.js', 'React Native'],
      database: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase'],
      devops: ['AWS', 'Azure', 'GCP'],
      iot: ['ESP8266', 'Raspberry Pi', 'MQTT', 'HTTP API', 'Sensors']
    },

    workExperience: [
      {
        company: 'KMITL CS-Dev Team',
      }
    ],

    projects: [
      {
        name: 'CSCamp18 Website',
        description: 'Website development for Computer Science Camp 18',
        link: 'https://www.cscamp.net',
      },
      {
        name: 'Budget Tracker',
        description:
          'Personal budget tracking web application using MERN stack for expense and income analysis.',
        link: 'https://budgettrack.panplay-itgoeasy.xyz'
      }
    ]
  }

  const skillCategories = [
    { name: 'Frontend', icon: Code, skills: portfolioData.skills.frontend, color: 'bg-blue-500' },
    { name: 'Backend', icon: Server, skills: portfolioData.skills.backend, color: 'bg-green-500' },
    { name: 'Frameworks', icon: Code, skills: portfolioData.skills.frameworks, color: 'bg-purple-500' },
    { name: 'Database', icon: Database, skills: portfolioData.skills.database, color: 'bg-orange-500' },
    { name: 'DevOps', icon: Cloud, skills: portfolioData.skills.devops, color: 'bg-red-500' },
    { name: 'IoT', icon: Cpu, skills: portfolioData.skills.iot, color: 'bg-teal-500' }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{portfolioData.name}</h1>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              {['about', 'education', 'skills', 'experience', 'projects'].map((s) => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s)}
                  className="hover:text-primary transition-colors"
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun /> : <Moon />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-6">
            {portfolioData.jobTitle}
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/pannawat05"><Github /></a>
            <a href="https://www.linkedin.com/in/pannawat-lertkomenkul-45958b18a/"><Linkedin /></a>
            <Mail />
          </div>

          <ChevronDown
            className="mx-auto mt-12 animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 text-muted-foreground">
            I am a Junior IoT Engineer and Full-Stack Developer with hands-on experience in
            building end-to-end systems, from IoT devices and sensors to web applications
            and backend APIs. I enjoy working with real-time data and modern web technologies
            to solve real-world problems.
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat) => (
            <Card key={cat.name}>
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  <div className={`p-2 rounded ${cat.color} text-white`}>
                    <cat.icon />
                  </div>
                  {cat.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge key={s} variant="outline">{s}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t">
        © 2024 {portfolioData.name} — IoT Engineer & Full-Stack Developer (Junior)
      </footer>
    </div>
  )
}

export default App
