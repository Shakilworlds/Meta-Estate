import React from 'react'

const ButtonFill = (ButtonFill) => {
  return (
    <div className='py-[17px] px-[33px] bg-white font-medium text-lg leading-[26px] text-black  border-[1px] rounded-[18px] flex items-center gap-4 cursor-pointer'>{ButtonFill.children}</div>
  )
}

export default ButtonFill