import React from 'react'
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faCheck, faRocket, faCode, faServer } from '@fortawesome/free-solid-svg-icons'

const pricingPlans = [
  {
    id: 1,
    title: 'Static Website',
    icon: faRocket,
    originalPrice: '₹7500',
    discountedPrice: '₹4500',
    discount: '40% OFF - Limited Time!',
    description: 'Responsive informational site (HTML/CSS/JS)',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Deployment assistance'
    ]
  },
  {
    id: 2,
    title: 'Frontend Application',
    icon: faCode,
    originalPrice: '₹22500',
    discountedPrice: '₹13500',
    discount: '40% OFF - Limited Time!',
    description: 'Modern frontend app (React, Tailwind CSS)',
    features: [
      'Component-based architecture',
      'Custom UI/UX implementation',
      'API integration (client-side)',
      'State management setup',
      'Performance optimization'
    ]
  },
  {
    id: 3,
    title: 'Full-Stack Application',
    icon: faServer,
    originalPrice: '₹60000',
    discountedPrice: '₹36000',
    discount: '40% OFF - Limited Time!',
    description: 'Complete solution (React & Spring Boot)',
    features: [
      'Frontend development (React)',
      'Backend development (Spring Boot)',
      'Database design and integration',
      'RESTful API development',
      'Authentication & Authorization',
      'Deployment & basic support'
    ]
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

const Pricing = () => {
  return (
    <section className="py-16 max-md:py-10 bg-[#02030a] relative overflow-hidden">
      {/* Grid Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />
      
      <Element name='pricing'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-md:py-4 relative z-10'>
          {/* Heading Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-md:mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#402de2] bg-clip-text text-transparent max-md:text-3xl">
                Choose Your Perfect Plan
              </h2>
            </motion.div>
            <motion.p 
              className="text-blue-100/80 text-lg mb-8 max-w-3xl mx-auto leading-relaxed max-md:text-base max-md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get started with our flexible pricing plans designed to meet your needs
            </motion.p>
          </motion.div>

          {/* Pricing Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
          >
            {pricingPlans.map((plan) => (
              <motion.div 
                key={plan.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className='relative group p-6 max-md:p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-500/[0.05] hover:to-transparent'
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00d4ff]/10 via-[#00aaff]/10 to-[#402de2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col h-full">
                  <div className="mb-4 max-md:mb-3">
                    <div className="flex items-center gap-3 mb-3 max-md:mb-2">
                      <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center max-md:w-10 max-md:h-10">
                        <FontAwesomeIcon 
                          icon={plan.icon} 
                          className='w-6 h-6 text-[#00d4ff] max-md:w-5 max-md:h-5'
                        />
                      </div>
                      <h3 className='text-xl md:text-2xl font-semibold text-blue-100 max-md:text-xl'>{plan.title}</h3>
                    </div>
                    <p className="text-blue-100/70 mb-4 max-md:mb-3">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-blue-100 max-md:text-xl">{plan.discountedPrice}</span>
                      <span className="text-base md:text-lg text-blue-100/50 line-through max-md:text-sm">{plan.originalPrice}</span>
                    </div>
                    <span className="inline-block mt-2 text-sm text-[#00d4ff] font-medium">{plan.discount}</span>
                  </div>

                  <ul className="space-y-2 max-md:space-y-1 mb-6 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 max-md:gap-1 text-blue-100/70 text-sm max-md:text-xs">
                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-[#00d4ff] max-md:w-2.5 max-md:h-2.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2.5 max-md:py-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#402de2] text-[#02030a] font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-[#00d4ff]/20 text-sm max-md:text-xs"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Element>
    </section>
  )
}

export default Pricing