import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    name: "Social Media Platform",
    description: "A full-featured social media platform with user authentication, real-time comments, share your thoughts on the app.",
    tags: [
      { name: "React", color: "blue-500" },
      { name: "Node.js", color: "green-500" },
      { name: "MongoDB", color: "emerald-500" },
      { name: "Stripe", color: "purple-500" },
    ],
    image: "/project1.jpg",
    source_code_link: "https://github.com/Julius-Nganga/socialfront.git",
    live_link: "https://socialfront-99ez-o62q32cw9-julius-ngangas-projects.vercel.app/",
  },
  {
    name: "live chat app",
    description: "a real time chat application where you can upload photos and files and send messegaes and real-time updates.",
    tags: [
      { name: "React", color: "blue-500" },
      { name: "Firebase", color: "orange-500" },
      { name: "Tailwind", color: "cyan-500" },
    ],
    image: "/project2.jpg",
    source_code_link: "https://github.com/PLP-MERN-Stack-Development/week-7-devops-deployment-assignment-Julius-Nganga.git",
    live_link: "https://client-l6br4cw3f-julius-ngangas-projects.vercel.app/",
  },
  {
    name: "simple blog webite ",
    description: "A simple blog website built with the normal html css and javascript.",
    tags: [
      { name: "Three.js", color: "gray-500" },
      { name: "React", color: "blue-500" },
      { name: "Framer Motion", color: "purple-500" },
    ],
    image: "/project3.jpg",
    source_code_link: "https://julius-nganga.github.io/Blog/",
    live_link: "https://github.com/Julius-Nganga/Blog?tab=readme-ov-file",
  },
]

const ProjectCard = ({ index, project, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === index ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer transition-[flex] duration-[0.7s] ease-out-flex`}
      onClick={() => handleClick(index)}
    >
      <div
        className={`absolute w-full h-full ${
          active === index ? 'opacity-25' : 'opacity-70'
        } bg-gradient-to-br from-primary to-secondary rounded-[24px]`}
      />

      <img
        src={project.image}
        alt={project.name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== index ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-light absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {project.name}
        </h3>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-dark/90 rounded-b-[24px]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="font-normal text-light/70 text-[16px]">
              {project.tags.map((tag) => tag.name).join(', ')}
            </p>
          </div>
          <h2 className="mt-2 font-bold text-[24px] text-light">{project.name}</h2>
          <p className="mt-2 text-light/70 text-[14px]">{project.description}</p>
          <div className="mt-4 flex gap-4">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

const Projects = ({ setActiveSection }) => {
  const [active, setActive] = useState(0)

  return (
    <section id="projects" className="relative w-full py-20 mx-auto max-w-7xl px-6">
      <motion.div onViewportEnter={() => setActiveSection('projects')}>
        <motion.div
          variants={fadeIn('up', 'spring', 0.1, 1)}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-4xl font-bold text-light">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-2 text-light/70 max-w-3xl">
            Some of my recent work. Click on each project to see details.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-12"
        >
          <div className="flex lg:flex-row flex-col min-h-[70vh] gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                project={project}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects