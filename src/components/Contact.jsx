import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { useForm } from 'react-hook-form'

const Contact = ({ setActiveSection }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Here you would typically send the data to your backend
    alert('Message sent successfully!')
    reset()
  }

  return (
    <section id="contact" className="relative w-full py-20 mx-auto max-w-7xl px-6">
      <motion.div onViewportEnter={() => setActiveSection('contact')}>
        <motion.div
          variants={fadeIn('up', 'spring', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-light">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-2 text-light/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-12 grid lg:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-light mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <h4 className="text-light/70">Email</h4>
                  <a
                    href="mailto:hingamax@gmail.com"
                    className="text-light hover:text-primary transition-colors"
                  >
                    hingamax@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4 className="text-light/70">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/juliusnganga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-primary transition-colors"
                  >
                    linkedin.com/in/juliusnganga
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h4 className="text-light/70">GitHub</h4>
                  <a
                    href="https://github.com/Julius-Nganga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-primary transition-colors"
                  >
                    github.com/Julius-Nganga
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaTwitter size={24} />
                </div>
                <div>
                  <h4 className="text-light/70">Twitter</h4>
                  <a
                    href="https://twitter.com/juliusnganga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-primary transition-colors"
                  >
                    @juliusnganga
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-light/70 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 bg-dark/50 border border-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-light"
              />
              {errors.name && (
                <p className="mt-1 text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-light/70 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-3 bg-dark/50 border border-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-light"
              />
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-light/70 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-3 bg-dark/50 border border-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-light"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary rounded-lg font-medium text-light hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact