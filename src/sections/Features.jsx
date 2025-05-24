import React from 'react'
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { 
  faCode,
  faPalette,
  faLaptopCode,
  faImage,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    id: 1,
    icon: faCode,
    title: 'Software Development',
    text: 'User-centered web development with React, JavaScript, Tailwind CSS, and Spring Boot — delivering responsive UIs, secure APIs, scalable architecture, and seamless performance for modern businesses.',
    link: 'https://1onestop.vercel.app/'
  },
  {
    id: 2,
    icon: faLaptopCode,
    title: 'Website Design',
    text: 'Creating responsive, visually stunning websites with HTML, CSS, JavaScript, and more, designed to reflect your brand and engage users effectively.',
    link: 'https://1onestop.vercel.app/'
  },
  {
    id: 3,
    icon: faPalette,
    title: 'Custom UI/UX Design',
    text: 'Crafting user-focused, visually engaging, and scalable designs using Figma, tailored to enhance your brand and user experience.',
    link: 'https://1onestop.vercel.app/'
  },
  {
    id: 4,
    icon: faImage,
    title: 'Graphic Design Services',
    text: 'We create professional posters, brochures, YouTube thumbnails, and more using Photoshop and advanced tools.',
    link: 'https://1onestop.vercel.app/'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const Features = () => {
  return (
    <section className="py-20 bg-[#02030a] relative overflow-hidden">
      {/* Grid Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />
      
      <Element name='features'>
        <div className='container mx-auto px-4 relative z-10'>
          {/* Heading Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#402de2] bg-clip-text text-transparent">
                Transform Your Brand with Premium Digital Solutions
              </h2>
            </motion.div>
            <motion.p 
              className="text-blue-100/80 text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your one-stop solution for UI/UX design, web development, and stunning visual content. We bring your vision to life with creative excellence.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className='relative group p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-500/[0.05] hover:to-transparent'
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/10 via-blue-400/10 to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col items-center text-center">
                  <motion.div 
                    className='mb-4'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 flex items-center justify-center backdrop-blur-sm">
                      <FontAwesomeIcon 
                        icon={feature.icon} 
                        className='w-7 h-7 text-blue-300 group-hover:text-blue-200 transition-colors duration-300'
                      />
                    </div>
                  </motion.div>
                  <motion.h3 
                    className='text-xl font-semibold text-blue-100 mb-3 group-hover:text-blue-200'
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className='text-blue-100/70 leading-relaxed mb-4 line-clamp-3'
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.text}
                  </motion.p>
                  <motion.a
                    href={feature.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-200 transition-all duration-300"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Started</span>
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Element>
    </section>
  )
}

export default Features