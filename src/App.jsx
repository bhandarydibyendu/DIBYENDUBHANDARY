import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Download'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-s1">
      <Header />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App