import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Experience setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </motion.div>
    </div>
  )
}

export default App