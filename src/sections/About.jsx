import React from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='py-20 bg-[#02030a] relative overflow-hidden'>
      {/* Grid Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />
      <Element name='about'>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='flex items-center justify-between gap-16 max-lg:gap-8 max-lg:flex-col'>
            {/* Left Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex-1 max-w-2xl max-lg:text-center'
            >
              <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#402de2] bg-clip-text text-transparent'>
                About Me
              </h2>
              <p className='text-lg text-gray-300 leading-relaxed mb-8'>
                As a dedicated Full-Stack Software Engineer, I specialize in building robust and scalable web applications. With a strong academic background and practical experience, I am passionate about developing innovative solutions that deliver exceptional user experiences. I am committed to continuous learning and contributing to impactful projects.
              </p>
              {/* Add more text or buttons here if needed */}
            </motion.div>

            {/* Right Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative flex-1 max-w-[500px] max-lg:max-w-[400px] max-md:max-w-[300px] mx-auto'
            >
              {/* Image will go here */}
              <div className='w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden'>
                <img src='/about.jpg' alt='About Image' className='w-full h-full object-cover' />
              </div>
            </motion.div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default About 