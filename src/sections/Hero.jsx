import React, { useEffect, useState } from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub, 
  faReact, 
  faJava, 
  faJs,
  faGitAlt,
  faDocker,
  faFigma
} from '@fortawesome/free-brands-svg-icons'
import { 
  faDatabase, 
  faLeaf, 
  faWind,
  faFire,
  faPalette,
  faCamera,
  faImage,
  faDownload
} from '@fortawesome/free-solid-svg-icons'

const techStack = [
  { name: 'React', icon: faReact, color: '#61DAFB' },
  { name: 'Java', icon: faJava, color: '#007396' },
  { name: 'Spring Boot', icon: faLeaf, color: '#6DB33F' },
  { name: 'Tailwind', icon: faWind, color: '#38B2AC' },
  { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
  { name: 'MySQL', icon: faDatabase, color: '#4479A1' },
  { name: 'Firebase', icon: faFire, color: '#FFCA28' },
  { name: 'Git', icon: faGitAlt, color: '#F05032' },
  { name: 'Docker', icon: faDocker, color: '#2496ED' },
  { name: 'Figma', icon: faFigma, color: '#F24E1E' },
  { name: 'Photoshop', icon: faPalette, color: '#31A8FF' },
  { name: 'Lightroom', icon: faCamera, color: '#31A8FF' }
]

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='relative min-h-screen flex items-center justify-center py-20 max-md:py-12 overflow-hidden'>
      {/* Background Image with Gradient Overlay */}
      <div className='absolute inset-0 z-0'>
        <img 
          src='/background.png' 
          alt='background' 
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-[2px]' />
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Element name='hero'>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='flex justify-between gap-12 max-lg:gap-8 max-lg:flex-col max-lg:text-center'>
            {/* Left Content */}
            <motion.div 
              style={{ y, opacity }}
              className='relative z-2 flex-1 max-w-2xl max-lg:max-w-full'
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='caption small-2 uppercase text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-semibold tracking-wider mb-3 max-md:mb-2'
              >
                Fullstack Software Developer
              </motion.div>
              <motion.h2
                className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#402de2] bg-clip-text text-transparent max-md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                SOUMIK MUKHERJEE
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl leading-relaxed max-md:text-base max-md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Full Stack Software Engineer | Crafting seamless digital experiences with a passion for innovative solutions.
              </motion.p>

              {/* Tech Stack Logos */}
              <div className='relative w-full h-20 mb-10 overflow-hidden max-md:h-16 max-md:mb-8'>
                {/* Gradient Masks for smooth fade-in/out */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#02030a] to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#02030a] to-transparent z-20" />
                
                <motion.div 
                  className="flex gap-8 absolute top-0 left-0"
                  animate={{ 
                    x: [0, -2000],
                  }}
                  transition={{ 
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear"
                    }
                  }}
                >
                  {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                      className='w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-lg flex items-center justify-center group relative max-md:w-10 max-md:h-10 max-md:p-1.5'
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <FontAwesomeIcon 
                        icon={tech.icon} 
                        className='w-6 h-6 relative z-10 max-md:w-5 max-md:h-5'
                        style={{ color: tech.color }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className='absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-300 text-center w-max max-md:hidden'
                      >
                        {tech.name}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='flex gap-4 max-lg:justify-center flex-wrap'
              >
                <motion.a 
                  href="/SOUMIK MUKHERJEE NEW.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden text-sm max-md:px-4 max-md:py-2 max-md:text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FontAwesomeIcon icon={faDownload} className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 relative z-10 max-md:w-3 max-md:h-3" />
                  <span className="relative z-10">View CV</span>
                </motion.a>
                <motion.a 
                  href="https://github.com/mukherjeesoumik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-5 py-2.5 rounded-full border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden text-sm max-md:px-4 max-md:py-2 max-md:text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FontAwesomeIcon icon={faGithub} className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 relative z-10 max-md:w-3 max-md:h-3" />
                  <span className="relative z-10">View GitHub</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='relative flex-1 max-w-[400px] max-lg:max-w-[300px] max-md:max-w-[250px] mx-auto'
            >
              <motion.img 
                src='/soumikmukherjee.png' 
                alt='Soumik Mukherjee' 
                className='w-full h-auto object-cover relative z-10 hover:scale-105 transition-all duration-500'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Hero