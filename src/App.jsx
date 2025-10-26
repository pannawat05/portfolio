import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
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
  Sun
} from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const portfolioData = {
    name: "ปัณณวัฒน์ เลิศโกเมนกุล",
    jobTitle: "FullStack Developer",
    education: [
      {
        institution: "Suankularb Wittayalai Thonburi School",
        degree: "High School",
        gpax: "3.46",
        logo: "https://sk-thonburi.ac.th/wp-content/uploads/2025/07/logo-1022x1024.png"
      },
      {
        institution: "King Mongkut's Institute of Technology Ladkrabang",
        degree: "University",
         gpax: "2.xx",
        logo: "https://old-engineer.kmitl.ac.th/wp-content/uploads/2019/03/logo02-300x270.png"
      }
    ],
    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      backend: ["Express", "Go", "FastAPI", "PHP"],
      frameworks: ["React", "Svelte", "Next.js", "React Native"],
      database: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
      devops: ["AWS", "Azure", "GCP"]
    },
    workExperience: [
      {
        company: "KMITL CS-Dev team",
        position: "Developer"
      }
    ],
    projects: [
      {
        name: "CSCamp18 website",
        description: "Website development for Computer Science Camp 18"
      }
    ]
  }

  const skillCategories = [
    { name: "Frontend", icon: Code, skills: portfolioData.skills.frontend, color: "bg-blue-500" },
    { name: "Backend", icon: Server, skills: portfolioData.skills.backend, color: "bg-green-500" },
    { name: "Frameworks", icon: Code, skills: portfolioData.skills.frameworks, color: "bg-purple-500" },
    { name: "Database", icon: Database, skills: portfolioData.skills.database, color: "bg-orange-500" },
    { name: "DevOps", icon: Cloud, skills: portfolioData.skills.devops, color: "bg-red-500" }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {portfolioData.name}
          </motion.h1>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-primary transition-colors">Education</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {portfolioData.jobTitle}
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="https://github.com/pannawat05">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/pannawat-lertkomenkul-45958b18a/">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              </a>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <User className="h-8 w-8" />
              About Me
            </h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a passionate FullStack Developer with expertise in modern web technologies. 
                  I enjoy creating innovative solutions and building applications that make a difference. 
                  My journey in technology started during my studies at King Mongkut's Institute of Technology Ladkrabang, 
                  where I developed a strong foundation in computer science and software development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <GraduationCap className="h-8 w-8" />
              Education
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{edu.institution}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                         <img src={edu.logo} style={{ borderRadius: '100%',width:'10%' }} alt="" srcset="" />
                        {edu.degree}
                        {edu.gpax && <Badge variant="secondary">GPA: {edu.gpax}</Badge>}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code className="h-8 w-8" />
              Skills
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg ${category.color} text-white`}>
                          <category.icon className="h-5 w-5" />
                        </div>
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Briefcase className="h-8 w-8" />
              Work Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {portfolioData.workExperience.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{work.company}</CardTitle>
                      <CardDescription>{work.position}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code className="h-8 w-8" />
              Projects
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.name}
                        <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 {portfolioData.name}. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
