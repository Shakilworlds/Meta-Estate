import AboutUs from '@/components/About/AboutUs'
import Footer from '@/components/Footer/Footer'
import About from '@/components/Navbar/AboutPage/About'
import OurCapabilities from '@/components/OurCapabilities/OurCapabilities'
import TeamMember from '@/components/TeamMember/TeamMember'
import React from 'react'

const Page = () => {
  return (
    <div>
      <About/>
      <AboutUs/>
      <TeamMember/>
      <OurCapabilities/>
      <Footer/>
    </div>
  )
}

export default Page