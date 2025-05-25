import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const NavLink = ({ title }) => (
    <LinkScroll 
      onClick={() => setIsOpen(false)} 
      to={title} 
      offset={-100} 
      spy 
      smooth 
      activeClass='nav-active' 
      className='base-bold text-p4 uppercase transition-all duration-300 cursor-pointer hover:text-p1 hover:scale-105 max-lg:my-3 max-lg:text-xl relative group lg:px-4'
    >
      {title}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-p1 transition-all duration-300 group-hover:w-full"></span>
    </LinkScroll>
  )

  const SocialIcon = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 rounded-full bg-s4/10 hover:bg-s4/20 transition-all duration-300 hover:scale-110 text-white"
      aria-label={label}
    >
      <FontAwesomeIcon icon={icon} className="w-4 h-4" />
    </a>
  )

  return (
    <header className={clsx(
      'fixed top-0 left-0 z-50 w-full py-6 transition-all duration-500 max-lg:py-4',
      hasScrolled ? 'py-3 bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    )}>
      <div className='container flex h-14 items-center justify-between max-lg:px-5'>
        <a 
          href="https://www.linkedin.com/in/soumikmukherjee4402" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={clsx('lg:hidden flex-1 cursor-pointer z-2 hover:opacity-80 transition-all duration-300 hover:scale-105', isOpen && 'invisible')}
        >
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl bg-gradient-to-r from-p1 to-p2 bg-clip-text text-transparent">SOUMIK</span>
            <img src='/pattern-3.png' width={50} height={25} alt='SOUMIK' className="hover:rotate-12 transition-transform duration-300"/>
            <span className="font-bold text-xl bg-gradient-to-r from-p2 to-p1 bg-clip-text text-transparent">MUKHERJEE</span>
          </div>
        </a>
        <div className={clsx(
          'w-full max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-screen max-sm:w-4/5 max-lg:w-64 max-lg:bg-s2/95 max-lg:backdrop-blur-lg max-lg:opacity-0 max-lg:transition-all max-lg:duration-300',
          isOpen ? 'max-lg:opacity-100 max-lg:translate-x-0 max-lg:pointer-events-auto' : 'max-lg:translate-x-full max-lg:pointer-events-none'
        )}>
          <div className={clsx(
            'fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )} onClick={() => setIsOpen(false)}></div>

          <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:justify-center max-lg:overflow-hidden sidebar-before'>
            <div className="max-lg:flex items-center justify-between p-4 border-b border-s4/25 lg:hidden">
                <a 
                    href="https://www.linkedin.com/in/soumikmukherjee4402" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105'
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-xl bg-gradient-to-r from-p1 to-p2 bg-clip-text text-transparent">SOUMIK</span>
                      <img src='/pattern-3.png' width={50} height={25} alt='SOUMIK' className="hover:rotate-12 transition-transform duration-300"/>
                      <span className="font-bold text-xl bg-gradient-to-r from-p2 to-p1 bg-clip-text text-transparent">MUKHERJEE</span>
                    </div>
                  </a>
                <button 
                    className='z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center hover:bg-s4/10 transition-all duration-300 hover:scale-110 text-white'
                    onClick={() => setIsOpen(false)}
                  >
                    X
                </button>
            </div>

            <nav className='max-lg:relative max-lg:z-2 max-lg:pt-4 max-lg:flex max-lg:flex-col max-lg:justify-center'>
              <ul className='lg:flex lg:items-center max-lg:block max-lg:px-6 max-md:px-4'>
                <li className='nav-li max-lg:mb-4 max-lg:mt-4 max-lg:text-left lg:mr-8'>
                  <NavLink title="about"/>
                  <div className='dot lg:block hidden'/>
                  <NavLink title="experience"/>
                </li>
                <li className='nav-logo lg:mx-8'>
                  <a 
                    href="https://www.linkedin.com/in/soumikmukherjee4402" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={clsx(
                      'max-lg:hidden transition-all duration-300 cursor-pointer hover:opacity-80 hover:scale-105'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-xl bg-gradient-to-r from-p1 to-p2 bg-clip-text text-transparent">SOUMIK</span>
                      <img src='/pattern-3.png' width={60} height={30} alt='SOUMIK' className="hover:rotate-12 transition-transform duration-300"/>
                      <span className="font-bold text-xl bg-gradient-to-r from-p2 to-p1 bg-clip-text text-transparent">MUKHERJEE</span>
                    </div>
                  </a>
                </li>
                <li className='nav-li max-lg:mb-4 max-lg:mt-4 max-lg:text-left'>
                  <NavLink title="projects"/>
                  <div className='dot lg:block hidden'/>
                  <NavLink title="contact"/>
                </li>
                <li className='flex items-center gap-4 max-lg:mt-8 max-lg:justify-center lg:ml-8'>
                  <SocialIcon 
                    href="https://github.com/mukherjeesoumik" 
                    icon={faGithub} 
                    label="GitHub Profile"
                  />
                  <SocialIcon 
                    href="mailto:soumikmukherjeekolkata@gmail.com" 
                    icon={faEnvelope} 
                    label="Email"
                  />
                </li>
              </ul>
            </nav>
            <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90 opacity-20'>
              <img src='/images/bg-outlines.svg' width={960} height={380} alt='outline' className='relative z-2'/>
              <img src='/images/bg-outlines-fill.png' width={960} height={380} alt='outline' className='absolute inset-0 mix-blend-soft-light opacity-5'/>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <SocialIcon 
            href="https://github.com/mukherjeesoumik" 
            icon={faGithub} 
            label="GitHub Profile"
          />
          <SocialIcon 
            href="mailto:soumikmukherjeekolkata@gmail.com" 
            icon={faEnvelope} 
            label="Email"
          />
          <button 
            className={clsx('z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center hover:bg-s4/10 transition-all duration-300 hover:scale-110', isOpen && 'invisible')}
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img 
              src={`/images/${isOpen ? 'close' : 'magic'}.svg`} 
              alt='menu' 
              className='size-1/2 object-contain transition-transform duration-300 hover:rotate-90'
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
