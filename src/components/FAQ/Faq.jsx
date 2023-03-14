import React from "react";
import styles from "../style";
import Badge from "../Badge/Badge";
import ButtonFill from "../Button/ButtonFill";
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "../Button/ButtonFill2";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div className={`${styles.sectionPaddingY} container flex flex-wrap sm:flex-wrap sm:gap-10 justify-between `}>
      <div>
        {/* Bagde */}
        <Badge>why our company</Badge>

        {/* Title Text */}
        <h2 className={`${styles.heading} pt-4`}>Strength of the company</h2>

        {/* Sub Title */}
        <p className="font-Inter font-normal text-lg leading-8 text-black lg:max-w-[560px] pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          egestas integer sed donec eget phasellus. Eget ornare neque vverra
          ante.
        </p>

        {/* Button */}

        <div className="inline-block pt-10">
          <Button>
            Explore Now{" "}
            <span className="text-2xl">
              <HiArrowLongRight />
            </span>{" "}
          </Button>
        </div>

        
      </div>
      <div>
          <FaqCard />
        </div>
    </div>
  );
};

export default Faq;
