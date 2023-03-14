import React from 'react';
import Image from 'next/image';
import styles from '../style';
import Badge from '../Badge/Badge';
import PortfolioCard from './PortfolioCard';
import { portfolioData } from '@/pages/data/Data';


const Portfolio = () => {
  return (
    <div className={`${styles.sectionPaddingY} container `}>
      
        {/* Title  */}
        <div>
          {/* Badge */}
          <div className={`${styles.flexCenter} pb-4 `}>
            <Badge>portfolio</Badge>
          </div>

          {/* Title Text */}
          <h2 className={`${styles.heading} text-center`}>
            Our Latest Project
          </h2>

          {/* Portfolio */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-[60px]'>
          <PortfolioCard
          imgUrl={portfolioData[0].imgUrl}
          location={portfolioData[0].location}
          />
          <PortfolioCard
          imgUrl={portfolioData[1].imgUrl}
          location={portfolioData[1].location}
          />
          <PortfolioCard
          imgUrl={portfolioData[2].imgUrl}
          location={portfolioData[2].location}
          />
          </div>
        
      </div>

    </div>
  )
}

export default Portfolio