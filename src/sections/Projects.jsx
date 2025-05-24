import React from 'react'
import { Element } from 'react-scroll'
import FaqItem from '../components/FaqItem'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className='py-16 max-md:py-10 bg-[#02030a] relative overflow-hidden'>
       {/* Grid Pattern */}
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />
      {/* Updated Element name to projects */}
      <Element name='projects'>
        <div className='container relative z-2 py-20 max-md:py-10 mx-auto px-4'>
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
                Explore My Projects
              </h2>
            </motion.div>
            <motion.p 
              className="text-blue-100/80 text-lg mb-8 max-w-3xl mx-auto leading-relaxed max-md:text-base max-md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Here are some featured full-stack projects built using Spring Boot, MySQL, and React. Each one demonstrates key concepts in web development.
            </motion.p>
          </motion.div>

          {/* FAQ/Project Items Container */}
          <div className='flex gap-8 max-lg:block max-lg:gap-4'>
            <div className='relative flex-1'>

              <FaqItem 
                id='0' 
                question='Jobify - Job Portal System' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />A platform where employers can post jobs and job seekers can apply.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>User authentication (employer/job seeker)</li>
                      <li>Job posting and application</li>
                      <li>Resume upload and job filtering</li>
                      <li>Admin dashboard for management</li>
                    </ul>
                  </>
                } 
                index={0}
              />

              <FaqItem 
                id='1' 
                question='ShopNest - E-commerce Web App' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />An online store where users can browse products and place orders.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Product listing with filters</li>
                      <li>Shopping cart and checkout</li>
                      <li>User login and order history</li>
                      <li>Admin panel for inventory</li>
                    </ul>
                  </>
                } 
                index={1}
              />

              <FaqItem 
                id='2' 
                question='LearnSphere - Online Learning Platform' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />A system for hosting courses and managing student enrollment and progress.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Role-based access (admin/instructor/student)</li>
                      <li>Course creation and enrollment</li>
                      <li>Video lessons, quizzes, certificates</li>
                      <li>Progress tracking</li>
                    </ul>
                  </>
                } 
                index={2}
              />

              <FaqItem 
                id='3' 
                question='FinTrack - Personal Finance Tracker' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />An app for managing income, expenses, and budgeting.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Track income and expenses</li>
                      <li>Monthly budget planner</li>
                      <li>Interactive graphs and reports</li>
                      <li>Export data (Excel/PDF)</li>
                    </ul>
                  </>
                } 
                index={3}
              />

              <FaqItem 
                id='4' 
                question='ConnectHub - Social Media Dashboard' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />A platform to share posts, connect with friends, and chat in real-time.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Create, like, comment on posts</li>
                      <li>Follow/unfollow system</li>
                      <li>Real-time chat using WebSocket</li>
                      <li>User notifications</li>
                    </ul>
                  </>
                } 
                index={4}
              />
            </div>

            <div className='relative flex-1 max-lg:mt-4'>

              <FaqItem 
                id='5' 
                question='EventEase - Event Management System' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />An app to manage events, attendee registration, and email notifications.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Create and manage events</li>
                      <li>Event registration and reminders</li>
                      <li>Attendee tracking</li>
                      <li>Admin analytics dashboard</li>
                    </ul>
                  </>
                } 
                index={5}
              />

              <FaqItem 
                id='6' 
                question='QuickHelp - Help Desk Ticketing System' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />A support system for ticket creation and resolution by agents.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Create tickets with status and priority</li>
                      <li>Assign tickets to agents</li>
                      <li>Role-based user access</li>
                      <li>Ticket filtering and history</li>
                    </ul>
                  </>
                } 
                index={6}
              />

              <FaqItem 
                id='7' 
                question='StockWatch - Inventory Management System' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />A tool for managing inventory, suppliers, and stock alerts.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Product and supplier management</li>
                      <li>Low stock alert system</li>
                      <li>Sales and purchase reports</li>
                      <li>Export to PDF/Excel</li>
                    </ul>
                  </>
                } 
                index={7}
              />

              <FaqItem 
                id='8' 
                question='MediBook - Hospital Appointment System' 
                answer={
                  <>
                    <p><strong>Description:</strong><br />A web app for booking appointments, managing patients, and assigning doctors.</p>
                    <p><strong>Tech Stack:</strong><br />Spring Boot, MySQL, React</p>
                    <p><strong>Key Features:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Doctor/patient login</li>
                      <li>Appointment scheduling system</li>
                      <li>Medical records access</li>
                      <li>Admin can manage doctor availability</li>
                    </ul>
                  </>
                } 
                index={8}
              />

            </div>
          </div>
          {/* Removed vertical line background elements */}
        </div>
      </Element>
    </section>
  )
}

export default Projects 