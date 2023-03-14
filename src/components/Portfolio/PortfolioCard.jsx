import React from 'react';
import Image from 'next/image';


const PortfolioCard = (props) => {
  return (
    <div>
      <Image src={props.imgUrl} height={500} width={430} alt='' className='shadow-5xl'  />
      <p className='font-Inter font-medium text-2xl leading-8 text-black text-center pt-6 '>{props.location}</p>


      

      
    </div>
  )
}

export default PortfolioCard