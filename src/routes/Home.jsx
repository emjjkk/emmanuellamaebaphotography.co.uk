import { useState } from 'react'

import Hero from '../components/Hero'
import PortfolioSection from '../components/PortfolioSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FaqsSection from '../components/FaqsSection'
import CtaSection from '../components/CtaSection'


export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection/>
      <FaqsSection/>
      <CtaSection/>
    </>
  )
}
