import React from 'react';
import Image from 'next/image';
import styles from '../style';
import WhyChooseUsImage from '../../../public/assets/chooseUsImage.png'
import Badge from '../Badge/Badge';
import CompanyInfo from './CompanyInfo';

const WhyChooseUs = () => {
  return (
    <div className={`${styles.sectionPaddingY} container`}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[147px]'>
        <div>
          <Image src={WhyChooseUsImage} alt={Image} />
        </div>
        <div>
          <Badge>why choose us</Badge>
          <h2 className={`${styles.heading} pt-4`}>Our All Excusive Services</h2>
          <p className={`${styles.paragraph} pt-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nunc amet, elit aliquam ullamcorper id id. Sed sit enim ullamcorper nunc, nec. Donec in tempus, cursus semper metus, magna.</p>

          <div className='grid grid-cols-2 gap-8 pt-10'>
            <CompanyInfo
            title='120+'
            subtitle='Top Experts'
            about='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            />
            <CompanyInfo
            title='5000+'
            subtitle='Strategies'
            about='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            />
            <CompanyInfo
            title='347+'
            subtitle='Great Results'
            about='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            />
            <CompanyInfo
            title='120+'
            subtitle='Hight Rankings'
            about='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyChooseUs