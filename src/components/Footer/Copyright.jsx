import React from 'react';
import Image from 'next/image';
import CopyrightIcon from '../../../public/assets/copyright-fill.svg';

const Copyright = () => {
  return (
    <div className='py-[16px] flex flex-wrap lg:flex-wrap justify-between border-t-[1px] border-peragraph mt-[60px] gap-2'>
      <div className='flex items-center gap-2'>
        <Image src={CopyrightIcon} alt={CopyrightIcon} />
        <p className='font-Inter font-normal text-sm text-peragraph'>Copyright 2022. All Right Reserved By js template</p>
      </div>

      <div className='flex items-center gap-10'>
        <p className='font-Inter font-normal text-sm text-peragraph'>Terms of Service</p>
        <p className='font-Inter font-normal text-sm text-peragraph'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Copyright