import React from "react";
import styles from "../style";
import { faqData } from "@/pages/data/Data";
import { HiPlus } from "react-icons/hi2";

const FaqCard = () => {
  return (
    <div className="p-6 bg-[#F5F4F7] rounded-[18px]">
      {faqData.map((faqData, i) => {
        return (
          <div key={i} className="pb-9">
            <div className="flex items-center justify-between pb-4">
              <h4 className={`${styles.titleText}`}>{faqData.title}</h4>
              <span className="text-2xl text-black"><HiPlus/></span>
            </div>
            <p className={`${styles.paragraph} max-w-[456px]`}>{faqData.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FaqCard;
