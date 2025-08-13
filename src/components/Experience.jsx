import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const experiences = [
  {
    title: "Senior Fullstack Developer",
    company: "TechSolutions Ltd",
    date: "2022 - Present",
    description: [
      "worked on multiple fullstack projects using MERN stack",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Architected and developed a microservices-based social media platform",
    ],
    icon: <FaBriefcase />,
    type: "work"
  },
  {
    title: "Fullstack Developer",
    company: "Digital Innovations",
    date: "2022 - 2025",
    description: [
      "Developed and maintained 15+ client websites using MERN stack",
      "Optimized application performance leading to 40% faster load times",
      "Implemented RESTful APIs for mobile applications",
    ],
    icon: <FaBriefcase />,
    type: "work"
  },
  {
    title: "Software Engineering ",
    company: "Power Learn Project Africa",
    date: "2022 - 2025",
    description: [
      "Specialized in Software Engineering and Database Systems",
      "Participated in hands-on projects to build real-world applications",
      "Gained experience through hands-on coding and months of practical training",
    ],
    icon: <FaGraduationCap />,
    type: "education"
  }
]

const Experience = ({ setActiveSection }) => {
  return (
    <section id="experience" className="relative w-full py-20 mx-auto max-w-7xl px-6">
      <motion.div onViewportEnter={() => setActiveSection('experience')}>
        <motion.div
          variants={fadeIn('up', 'spring', 0.1, 1)}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-4xl font-bold text-light">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-2 text-light/70 max-w-3xl">
            A timeline of my professional and educational experience
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-12"
        >
          <VerticalTimeline lineColor="#1e40af">
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: '#1e293b', color: '#f8fafc', boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)' }}
                contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
                date={exp.date}
                dateClassName="text-light"
                iconStyle={{ background: exp.type === "work" ? '#1e40af' : '#9333ea', color: '#f8fafc' }}
                icon={exp.icon}
              >
                <h3 className="text-lg font-bold text-light">{exp.title}</h3>
                <h4 className="text-primary font-medium">{exp.company}</h4>
                <ul className="mt-2 list-disc list-inside text-light/80">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mt-1">{item}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience