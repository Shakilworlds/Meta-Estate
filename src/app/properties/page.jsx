import Footer from '@/components/Footer/Footer'
import PropertiesHero from '@/components/Navbar/PropertiesHero/PropertiesHero'
import Poperties from '@/components/Poperties/Poperties'
import React from 'react'

const page = () => {
  return (
    <div>
      <PropertiesHero/>
      <Poperties/>
      <Footer/>
    </div>
  )
}

export default page