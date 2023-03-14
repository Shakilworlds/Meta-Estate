
import Faq from '@/components/FAQ/Faq';
import Footer from '@/components/Footer/Footer';
import ServiceHero from '@/components/Navbar/ServicesHero/ServiceHero';
import Services from '@/components/Servicess/Services';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import React from 'react';


const page = () => {
  return (
    <div>
      <ServiceHero/>
      <Services/>
      <WhyChooseUs/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default page