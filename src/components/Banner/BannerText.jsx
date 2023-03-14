import React from "react";
import Button from "../Button/ButtonFill";
import styles from "../style";
import { HiArrowLongRight } from "react-icons/hi2";

const BannerText = () => {
  return (
    <div className=" pt-[196px]">

      {/* Banner Title Text */}
      <h1 className={`${styles.heroHeading}`}>
        Help You Found Suitable Home is Our Priority.
      </h1>

      {/* Banner subTitle Text */}
      <p className="font-Inter font-medium text-lg text-white max-w-[336px] md:max-w-[622px] lg:max-w-[684px] text-center mx-auto pt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis id
        nunc vel tellus ultrices. Laoreet ut luctus faucibus mi fringilla. Sit
        euismod convallis
      </p>

      {/* Button */}
      <div className={`${styles.flexCenter} pt-10`}>
      <Button >Explore Now <span className="text-2xl"><HiArrowLongRight/></span> </Button>
      </div>
    </div>
  );
};

export default BannerText;
