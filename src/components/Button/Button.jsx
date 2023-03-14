import React from 'react'

const Button = (Button) => {
  return (
    <div className='py-[17px] px-[33px] font-medium text-sm lg:text-lg leading-[26px] text-white  border-[1px] rounded-[18px]'>{Button.children}</div>
  )
}

export default Button