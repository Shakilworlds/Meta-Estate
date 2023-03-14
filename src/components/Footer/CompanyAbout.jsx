import React from 'react';
import Image from 'next/image';
import Logo1 from '../../../public/assets/logo2.svg';
import Facebook from '../../../public/assets/facebook-fill.svg';
import Instagram from '../../../public/assets/instagram-fill.svg';
import Skype from '../../../public/assets/skype-fill.svg';
import Twitter from '../../../public/assets/twitter-fill.svg';


const CompanyAbout = () => {
  return (
    <div>
      <Image src={Logo1} alt="" />
      <p className='font-Inter font-normal text-base text-peragraph pt-9 max-w-[310px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec diam, et elementum, et vel pharetra. Aliquam nisi venenatis erat pellentesque feugiat.</p>
      <div className='flex gap-4 pt-10'>
        <p className="font-Inter font-medium text-base text-peragraph">Follow US:</p>
        <span className='flex items-center gap-4'>
        <Image className='cursor-pointer' src={Facebook} alt="Facebook" />
        <Image className='cursor-pointer' src={Instagram} alt="Instagram" />
        <Image className='cursor-pointer' src={Skype} alt="Skype" />
        <Image className='cursor-pointer' src={Twitter} alt="Twitter" />
        </span>
      </div>
    </div>
  )
}

export default CompanyAbout