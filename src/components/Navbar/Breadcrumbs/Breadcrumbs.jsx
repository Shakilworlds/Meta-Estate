import React from 'react'

const Breadcrumbs = (props) => {
  return (
    <div className='container pt-[90px] lg:pt-[134px]'>
      <h3 className='font-FTMilky font-black text-4xl text-center text-white'>{props.title}</h3>
      <p className='font-inter  font-normal text-sm text-center text-white pt-4'>{props.subTitle}</p>
    </div>
  )
}

export default Breadcrumbs