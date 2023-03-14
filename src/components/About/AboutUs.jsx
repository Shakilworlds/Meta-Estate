import React from 'react';
import Badge from '../Badge/Badge';
import styles from '../style';
import Image from 'next/image';
import AboutImage1 from '../../../public/assets/aboutImage1.png'
import AboutImage2 from '../../../public/assets/aboutImage2.png'
import { companyData } from '@/pages/data/Data';

const AboutUs = () => {
  return (
    <div className={`${styles.sectionPaddingY} container`}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[147px] '>
        <div>
        {/* About Us Badge */}
        <Badge>About us</Badge>
        {/* About Us title */}
        <h2 className={`${styles.heading} lg:max-w-[661px] pt-[30px] pb-[40px]`}>
        Buying or Rent Homey it’s Very Easy. Just like Click, Search & Find 
        </h2>
        {/* Image */}
        <Image src={AboutImage1} alt={Image} />
        </div>
        <Image src={AboutImage2} alt={Image} className='' />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[115px]'>
        {companyData.map((companyData, i) => {
          return(
            <div key={i}>
              <h3 className={`${styles.heading} text-center`}>{companyData.title}</h3>
              <p className={`${styles.paragraph} text-center`}>{companyData.subTitle}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default AboutUs