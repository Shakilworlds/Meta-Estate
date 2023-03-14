import React from 'react'
import NavBar from '@/components/Navbar/NavBar'
import Image from 'next/image'
import BannerImage from '../../../../public/assets/bannerImage2.png'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const About = () => {
  return (
    <div>
      <div className="relative">
      <div className="absolute  w-full">
        <NavBar/>
        <Breadcrumbs
        title="About us"
        subTitle="Home / About"
        />
        
      </div>
      <Image src={BannerImage} alt="Image" className=" sm:h-[300px] lg:h-[400px] max-h-full  -z-10" />
    </div>
    </div>
  )
}

export default About