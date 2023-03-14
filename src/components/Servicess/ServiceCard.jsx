import React from 'react';
import Image from 'next/image';
import styles from '../style';



const ServiceCard = (props) => {
  return (
    <div className='bg-white py-[60px] px-[40px] rounded-2xl hover:border-[1px] border-primary'>
      <div className={`${styles.flexCenter} bg-primary/10 h-[64px] w-[64px] rounded-md mb-6`}>
      <Image src={props.imgUrl} height={24} width={24} alt=''  />
      </div>
      <h3 className={`${styles.titleText} text-center pb-4 `}>{props.title}</h3>
      <p className={`${styles.paragraph} text-center`}>{props.discription}</p>

    </div>
  )
}

export default ServiceCard