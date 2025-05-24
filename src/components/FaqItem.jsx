import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='mb-4'
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'
      >
        <span className='text-lg font-semibold text-white'>{question}</span>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <Collapse isOpened={isOpen}>
        <div className='p-4 mt-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10'>
          <div className='text-gray-300 space-y-2'>
            {answer}
          </div>
        </div>
      </Collapse>
    </motion.div>
  )
}

export default FaqItem