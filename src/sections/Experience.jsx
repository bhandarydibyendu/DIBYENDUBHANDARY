import React from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faMapMarkerAlt, faCalendarAlt, faCode, faBrain, faGraduationCap, faRocket } from '@fortawesome/free-solid-svg-icons'

const experiences = [
  {
    id: '0',
    company: 'iFocus Systec (India) Private Limited',
    initial: 'I',
    title: 'Java Software Developer',
    type: 'Full-time',
    duration: 'Apr 2025 - Present · 2 mos',
    location: 'Bengaluru, Karnataka, India · On-site',
    icon: faCode,
    description: [], // Add description points here if needed
  },
  {
    id: '1',
    company: 'AILABS',
    initial: 'A',
    title: 'Machine Learning Intern',
    type: 'Internship',
    duration: 'Jul 2023 - Sep 2023 · 3 mos',
    location: 'Kolkata, West Bengal, India · On-site',
    icon: faBrain,
    skills: 'Artificial Intelligence (AI) and Machine Learning',
    description: [], // Add description points here if needed
  },
  {
    id: '2',
    company: 'Jspiders',
    initial: 'J',
    title: 'Java Software Training and SQL',
    type: 'Training',
    duration: 'Aug 2024 - Feb 2025',
    location: 'Bengaluru - Marathalli, Karnataka',
    icon: faGraduationCap,
    skills: 'Java, SQL',
    description: [], // Add description points here if needed
  },
  {
    id: '3',
    company: 'NASA',
    initial: 'N',
    title: 'International Space Apps Challenge Attendee',
    type: 'Hackathon',
    duration: 'N/A', // Specify date if available
    location: 'Kolkata, West Bengal, India',
    icon: faRocket,
    skills: 'Teamwork, Problem Solving, Innovation',
    description: [], // Add description points here if needed
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Experience = () => {
  return (
    <section className="py-16 max-md:py-10 bg-[#02030a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,103,222,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <Element name="experience" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 max-md:py-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-md:mb-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent max-md:text-3xl">
                Professional Journey
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto max-md:text-base">
                A timeline of my professional growth and achievements
              </p>
            </motion.div>
          </motion.div>

          {/* Experience Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {experiences.map((exp) => (
              <motion.div
                variants={itemVariants}
                key={exp.id}
                className="group relative"
              >
                {/* Card Container */}
                <div className="h-full p-6 max-md:p-4 rounded-2xl bg-[#02030a] backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,103,222,0.15)]">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/10 via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon/Initial Circle */}
                    <motion.div
                      className="w-14 h-14 rounded-full bg-[#02030a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20 max-md:w-12 max-md:h-12 max-md:mb-3"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FontAwesomeIcon icon={exp.icon} className="w-6 h-6 text-blue-400 max-md:w-5 max-md:h-5" />
                    </motion.div>

                    {/* Experience Details */}
                    <div className="space-y-3 max-md:space-y-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 max-md:text-lg">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400/80 text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <div className="space-y-1.5 max-md:space-y-1">
                        <p className="text-gray-300/80 text-sm flex items-center gap-2 max-md:gap-1.5">
                          <FontAwesomeIcon icon={faBriefcase} className="w-3.5 h-3.5 text-blue-400 max-md:w-3 max-md:h-3" />
                          {exp.type}
                        </p>
                        <p className="text-gray-300/80 text-sm flex items-center gap-2 max-md:gap-1.5">
                          <FontAwesomeIcon icon={faCalendarAlt} className="w-3.5 h-3.5 text-blue-400 max-md:w-3 max-md:h-3" />
                          {exp.duration}
                        </p>
                        <p className="text-gray-300/80 text-sm flex items-center gap-2 max-md:gap-1.5">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3.5 h-3.5 text-blue-400 max-md:w-3 max-md:h-3" />
                          {exp.location}
                        </p>
                      </div>

                      {exp.skills && (
                        <div className="pt-4 border-t border-blue-500/10 max-md:pt-3">
                          <p className="text-gray-300/80 text-sm">
                            <span className="text-blue-400 font-medium">Skills:</span> {exp.skills}
                          </p>
                        </div>
                      )}

                      {exp.description && exp.description.length > 0 && (
                        <ul className="list-disc list-inside space-y-0.5 text-gray-300/80 text-sm max-md:text-xs">
                          {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Element>
    </section>
  )
}

export default Experience 