import React from "react";
import { popertiesData } from "@/pages/data/Data";
import Image from "next/image";
import styles from "../style";

import { HiArrowLongRight } from "react-icons/hi2";
import Button from "../Button/ButtonFill2";

const Poperties = () => {
  return (
    <div className={`${styles.sectionPaddingY} container `}>

      {/* Porperties */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popertiesData.map((popertiesData, i) => {
          return (
            <div key={i}>
              <Image
                src={popertiesData.img}
                alt={Image}
                width={429}
                height={500}
              />
              <div className="p-6 rounded-[16px] shadow-4xl">
                <h3 className="font-FTMilky font-black text-2xl text-black">
                  {popertiesData.title}
                </h3>
                <p className="font-Inter font-normal text-xs text-peragraph pt-4">
                  {popertiesData.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>

        {/* Button */}
      <div className="pt-10 flex justify-center">
        <Button>
          Explore Now{" "}
          <span className="text-2xl">
            <HiArrowLongRight />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Poperties;
