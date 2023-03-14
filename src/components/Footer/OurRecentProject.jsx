import React from 'react';
import Image from 'next/image';
import FooterImage1 from '../../../public/assets/footerImage1.png';
import FooterImage2 from '../../../public/assets/footerImage2.png';
import FooterImage3 from '../../../public/assets/footerImage3.png';
import FooterImage4 from '../../../public/assets/footerImage4.png';
import FooterImage5 from '../../../public/assets/footerImage5.png';
import FooterImage6 from '../../../public/assets/footerImage6.png';

const OurRecentProject = () => {
  return (
    <div>
      <h3 className='font-FTMilky font-black text-[30px] text-white pb-10'>Our Recent Project</h3>
      <div  className='grid grid-cols-3 gap-6'>
      <Image src={FooterImage1} alt={Image} />
      <Image src={FooterImage2} alt={Image} />
      <Image src={FooterImage3} alt={Image} />
      <Image src={FooterImage4} alt={Image} />
      <Image src={FooterImage5} alt={Image} />
      <Image src={FooterImage6} alt={Image} />
      </div>
    </div>
  )
}

export default OurRecentProject