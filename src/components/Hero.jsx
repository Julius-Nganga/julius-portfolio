import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ComputerCanvas from './3D/Computer'
import { FaArrowRight } from 'react-icons/fa'

const Hero = ({ setActiveSection }) => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-transparent" />
        </div>

        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold text-light"
          >
            Hi, I'm <span className="text-primary">Julius Nganga</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-bold text-light mt-4"
          >
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                1000,
                'MERN Specialist',
                1000,
                'UI/UX Enthusiast',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-light/70 text-sm sm:text-base max-w-3xl mt-4"
          >
            I build exceptional digital experiences with modern technologies.
            Currently focused on building responsive web applications with the
            MERN stack.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <button
              onClick={() => {
                setActiveSection('projects')
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-6 py-3 bg-primary rounded-lg font-medium text-light flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <motion.a
          href="#about"
          onClick={() => setActiveSection('about')}
          initial={{ y: 0 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-light flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 rounded-full bg-light"
            />
          </div>
        </motion.a>
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full">
        <ComputerCanvas />
      </div>
    </section>
  )
}

export default Hero