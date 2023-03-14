import React from 'react'

const CompanyInfo = (props) => {
  return (
    <div>
      <h3 className='font-inter font-semibold text-[30px] text-black'>{props.title}</h3>
      <h5 className='font-FTMilky font-black text-xl text-black py-2'>{props.subtitle}</h5>
      <p className='font-inter font-normal text-xs leading-[18px] text-peragraph max-w-[234px]'>{props.about}</p>
    </div>
  )
}

export default CompanyInfo