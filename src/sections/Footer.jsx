import React from 'react'
// Import FontAwesome icons and component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

// Define social links with FontAwesome icons
const socialLinks = [
  {
    id: 0,
    url: 'https://www.linkedin.com/in/soumikmukherjee4402',
    icon: faLinkedin,
    title: 'LinkedIn'
  },
  {
    id: 1,
    url: 'https://github.com/mukherjeesoumik',
    icon: faGithub,
    title: 'GitHub'
  },
  {
    id: 2,
    url: 'https://www.instagram.com/soumikmukherjee4402',
    icon: faInstagram,
    title: 'Instagram'
  }
]

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // Apply dark background and padding
    <footer className='py-10 bg-[#02030a]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Copyright Information */}
          <div className='text-center md:text-left'>
            <p className='text-gray-400 text-sm'>
              &copy; {currentYear} SOUMIK MUKHERJEE. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className='flex items-center justify-center gap-6'>
            <a href='#' className='text-gray-400 text-sm transition-colors duration-300 hover:text-blue-400'>Privacy Policy</a>
            <a href='#' className='text-gray-400 text-sm transition-colors duration-300 hover:text-blue-400'>Terms of Use</a>
          </div>

          {/* Social Icons */}
          <ul className='flex justify-center md:justify-end gap-4'>
            {socialLinks.map((social) => (
              <li key={social.id}>
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 text-blue-400'
                  aria-label={social.title}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer