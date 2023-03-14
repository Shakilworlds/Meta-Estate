import React from 'react'
import ContactHero from '@/components/Navbar/ContactHero/ContactHero'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

const page = () => {
  return (
    <div>
      <ContactHero/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page