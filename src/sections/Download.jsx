import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      content: 'soumikmukherjeekolkata@gmail.com',
      link: 'mailto:soumikmukherjeekolkata@gmail.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      content: '+91 83348 44002',
      link: 'tel:+918334844002'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      content: 'Kolkata, West Bengal, India',
      link: 'https://maps.google.com/?q=Kolkata,West+Bengal,India'
    }
  ]

  const socialLinks = [
    {
      icon: faLinkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/soumikmukherjee4402'
    },
    {
      icon: faGithub,
      title: 'GitHub',
      link: 'https://github.com/mukherjeesoumik'
    },
    {
      icon: faInstagram,
      title: 'Instagram',
      link: 'https://www.instagram.com/soumikmukherjee4402'
    }
  ]

  return (
    <section className="py-16 max-md:py-10 bg-[#02030a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,103,222,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <Element name="contact" className="relative z-10">
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
                Get In Touch
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto max-md:text-base">
                Let's discuss how we can work together to bring your ideas to life
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 max-md:space-y-4"
            >
              <div className="bg-[#02030a] backdrop-blur-sm rounded-2xl p-6 max-md:p-4 border border-blue-500/10 shadow-[0_0_30px_rgba(59,103,222,0.1)]">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 max-md:mb-3">Contact Information</h3>
                <div className="space-y-4 max-md:space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group max-md:space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#02030a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-500/20 max-md:w-8 max-md:h-8">
                        <FontAwesomeIcon icon={info.icon} className="w-5 h-5 text-blue-400 max-md:w-4 max-md:h-4" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm max-md:text-xs">{info.title}</h4>
                        <p className="text-gray-400 text-sm max-md:text-xs">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-blue-500/10 max-md:mt-4 max-md:pt-4">
                  <h4 className="text-white font-medium mb-3 max-md:mb-2">Connect with me</h4>
                  <div className="flex justify-center md:justify-start space-x-3 max-md:space-x-2">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#02030a] flex items-center justify-center group hover:shadow-[0_0_20px_rgba(59,103,222,0.2)] transition-all duration-300 border border-blue-500/20 max-md:w-8 max-md:h-8"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FontAwesomeIcon icon={social.icon} className="w-5 h-5 text-blue-400 group-hover:text-blue-300 max-md:w-4 max-md:h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-[#02030a] backdrop-blur-sm rounded-2xl p-6 max-md:p-4 border border-blue-500/10 shadow-[0_0_30px_rgba(59,103,222,0.1)]">
                <div className="space-y-4 max-md:space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 max-md:text-xs">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#02030a] border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm max-md:px-2.5 max-md:py-2 max-md:text-xs"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 max-md:text-xs">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#02030a] border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm max-md:px-2.5 max-md:py-2 max-md:text-xs"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 max-md:text-xs">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#02030a] border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm max-md:px-2.5 max-md:py-2 max-md:text-xs"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 max-md:text-xs">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2.5 rounded-lg bg-[#02030a] border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none text-sm max-md:px-2.5 max-md:py-2 max-md:text-xs"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-2.5 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-[#02030a] transition-all duration-300 text-sm max-md:py-2 max-md:text-xs"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Contact