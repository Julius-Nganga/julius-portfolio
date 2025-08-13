import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary"
        >
          Julius<span className="text-secondary">.</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-primary' : 'text-light/70 hover:text-primary'
              }`}
              onClick={() => {
                setActiveSection(item.id)
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute left-0 top-full h-0.5 w-full bg-primary"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-4"
        >
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/Julius-Nganga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://linkedin.com/in/juliusnganga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary"
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://twitter.com/juliusnganga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary"
          >
            <FaTwitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:julius@example.com"
            className="text-light hover:text-primary"
          >
            <HiOutlineMail size={20} />
          </motion.a>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar