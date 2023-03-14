import React from 'react';
import Image from 'next/image';
import styles from '../style';

const Member = (props) => {
  return (
    <div>
      <Image src={props.img} alt={Image} />
      <h3 className={`${styles.titleText} pt-4`}>{props.name}</h3>
      <h5 className='font-inter font-normal text-sm text-peragraph pt-2 pb-4'>{props.position}</h5>
      <p className='font-Inter font-normal text-base text-peragraph max-w-[255px]'>{props.discription}</p>
      <ul className='flex items-center gap-4 pt-4'>
        <li className='cursor-pointer'><Image src={props.icon1} alt={Image} /></li>
        <li className='cursor-pointer'><Image src={props.icon2} alt={Image} /></li>
        <li className='cursor-pointer'><Image src={props.icon3} alt={Image} /></li>
        <li className='cursor-pointer'><Image src={props.icon4} alt={Image} /></li>
        
      </ul>
    </div>
  )
}

export default Member