import React from 'react'

const Button = (Button) => {
  return (
    <div className='py-[17px] px-[33px] bg-primary font-medium text-lg leading-[26px] text-white  border-[1px] rounded-[18px] items-center flex gap-4 cursor-pointer '>{Button.children}</div>
  )
}

export default Button