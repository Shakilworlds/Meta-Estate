import React from "react";
import styles from "../style";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Avter from '../../../public/assets/Avatar1.png'

const Testimonia = () => {
  return (
    <div className="container pb-[120px]">
      <div>
        <span className={`${styles.flexCenter} text-[40px] text-primary pb-[18px]`}>
        <FaQuoteLeft />
        </span>
        <h3 className="font-Inter font-normal text-[20px]  md:text-[30px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[60px] tracking-[0.2] max-w-[823px]   text-center mx-auto "> Builds can be the most awful sinkhole for teams to waste their time with
          - library is a serious win for any project
        </h3>
      </div>
      <div className={`${styles.flexCenter} items-center gap-4 pt-[40px] lg:pt-[60px]`}>
        <Image src={Avter} alt="Image" />
        <span>
          <h4 className="font-FTMilky font-semibold text-[20px] leading-[28px] text-primary">Leo Baptista</h4>
          <p className="font-FTMilky font-normal text-sm leading-[20px] text-peragraph">House Owner</p>
        </span>

      </div>
    </div>
  );
};

export default Testimonia;
