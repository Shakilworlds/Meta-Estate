import React from 'react';
import styles from '../style';
import CompanyAbout from './CompanyAbout';
import Contact from './Contact';
import Copyright from './Copyright';
import FooterLink from './FooterLink';
import OurRecentProject from './OurRecentProject';


const Footer = () => {
  return (
    <div className='bg-[#0F172A]'>
      <div className='container '>
        {/* Contact */}
        <div className='pt-[120px] pb-10'>
          <Contact/>
        </div>

        {/* Contact */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
          <CompanyAbout/>
        

        {/* Our Services */}
        <FooterLink
        title='Service'
        footerName1='Property Management'
        footerName2='Home Buying'
        footerName3='Counsuling Services'
        footerName4='Commercial House'
        footerName5='Rentail'
        />

        {/* Useful Link */}
        <FooterLink
        title='Useful Links'
        footerName1='About'
        footerName2='Services'
        footerName3='Properties'
        footerName4='Blog'
        footerName5='Contact'
        />
        
        {/* Recent Project Image */}
        <OurRecentProject/>
        </div>

         {/* Copyright  */}
        <Copyright/>
      </div>
    </div>
  )
}

export default Footer