import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const About = ({ setActiveSection }) => {
  return (
    <section id="about" className="relative w-full py-20 mx-auto max-w-7xl px-6">
      <motion.div
        onViewportEnter={() => setActiveSection('about')}
        className="flex flex-col lg:flex-row gap-10 items-center"
      >
        <motion.div
          variants={fadeIn('right', 'spring', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-light">
            About <span className="text-primary">Me</span>
          </h2>
          <h3 className="text-xl font-medium text-light mt-2">
            Fullstack Developer based in Nairobi, Kenya
          </h3>
          <p className="mt-4 text-light/70">
            I'm Julius Nganga Hinga, a passionate Fullstack Developer with expertise
            in the MERN stack (MongoDB, Express.js, React, Node.js). I specialize
            in building scalable web applications with intuitive user interfaces.
          </p>
          <p className="mt-4 text-light/70">
            With  years of experience in web development, I've worked on
            various projects ranging from small  websites to complex
            enterprise applications. I'm dedicated to writing clean, efficient
            code and staying up-to-date with the latest technologies.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-light">MERN Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-light">Responsive Web Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-light">API Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-light">Database Design</span>
            </div>
          </div>
        </motion.div>

        {/* Photo Holder */}
        <motion.div
          variants={fadeIn('left', 'spring', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="relative w-64 h-64 lg:w-80 lg:h-80"
        >
          <div className="absolute inset-0 border-4 border-primary rounded-lg transform rotate-6"></div>
          <div className="absolute inset-0 border-4 border-secondary rounded-lg transform -rotate-6"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-dark/50 backdrop-blur-sm">
            <img
              src="/julius-photo.png"
              alt="Julius Nganga Hinga"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute -z-10 w-full h-full"
          >
            <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-primary blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-secondary blur-xl"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About