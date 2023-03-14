import React from 'react'
import { FiPhoneCall,FiMail,FiMapPin } from "react-icons/fi";
const Contact = () => {
  return (
    <div className='container bg-primary rounded-[10px]'>
      <div className='py-3 px-11 grid grid-cols-1 md:grid-cols-3 gap-4  '>

        {/* Call  */}
        <div className='flex items-center gap-4'>
          <span className='bg-white p-3 lg:p-6 md:text-base lg:text-[32px] text-primary rounded-full'>
          <FiPhoneCall/>
          </span>
          <p className='font-Inter font-medium text-sm lg:text-2xl text-white'>(671) 555-0110</p>
        </div>

        {/* Email  */}
        <div className='flex items-center gap-4'>
          <span className='bg-white p-3 lg:p-6 md:text-base lg:text-[32px] text-primary rounded-full'>
          <FiMail/>
          </span>
          <p className='font-Inter font-medium text-sm lg:text-2xl text-white'>info@youremail.com</p>
        </div>

        {/* Location  */}
        <div className='flex items-center gap-4'>
          <span className='bg-white p-3 lg:p-6 md:text-base lg:text-[32px] text-primary rounded-full'>
          <FiMapPin/>
          </span>
          <p className='font-Inter font-medium text-sm lg:text-2xl text-white'>4140 Parker Rd. Allentown, New Mexico 31134</p>
        </div>
      </div>
    </div>
  )
}

export default Contact