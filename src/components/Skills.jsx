import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import StarsCanvas from './3D/Stars'

const skills = [
  { name: 'JavaScript', level: 95, color: '#f0db4f' },
  { name: 'React', level: 90, color: '#61dbfb' },
  { name: 'Node.js', level: 85, color: '#68a063' },
  { name: 'Express', level: 80, color: '#000000' },
  { name: 'MongoDB', level: 85, color: '#4db33d' },
  { name: 'HTML/CSS', level: 95, color: '#e34c26' },
  { name: 'Tailwind CSS', level: 90, color: '#38b2ac' },
  { name: 'Git', level: 85, color: '#f34f29' },
  { name: 'Docker', level: 75, color: '#2496ed' },
  { name: 'AWS', level: 70, color: '#ff9900' },
]

const Skills = ({ setActiveSection }) => {
  return (
    <section id="skills" className="relative w-full py-20 mx-auto max-w-7xl px-6">
      <motion.div onViewportEnter={() => setActiveSection('skills')}>
        <StarsCanvas />
        
        <motion.div
          variants={fadeIn('up', 'spring', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold text-light">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-2 text-light/70 max-w-3xl">
            Technologies I've worked with and my proficiency level
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        >
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-light font-medium">{skill.name}</span>
                <span className="text-light/70 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-dark/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ backgroundColor: skill.color }}
                  className="h-full rounded-full relative"
                >
                  <motion.span
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ backgroundColor: skill.color }}
                    className="absolute inset-0 blur-sm"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10"
        >
          {[
            'devicon-javascript-plain',
            'devicon-react-original',
            'devicon-nodejs-plain',
            'devicon-express-original',
            'devicon-mongodb-plain',
            'devicon-html5-plain',
            'devicon-css3-plain',
            'devicon-tailwindcss-plain',
            'devicon-git-plain',
            'devicon-docker-plain',
            'devicon-aws-plain',
            'devicon-typescript-plain',
            'devicon-redux-original',
            'devicon-graphql-plain',
            'devicon-jest-plain',
          ].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <i className={`${icon} colored text-5xl`}></i>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills