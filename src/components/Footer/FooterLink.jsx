import React from "react";
import styles from "../style";
import Image from "next/image";
import ArrowIcon from "../../../public/assets/chevron.svg";

const FooterLink = (props) => {
  return (
    <div>
      <h3 className="font-FTMilky font-black text-[30px] text-white pb-[40px]">
        {props.title}
      </h3>
      <ul className={`${styles.paragraph} text-peragraph space-y-4`}>
        <li className="flex gap-[10px] cursor-pointer">
          {" "}
          <span>
            <Image src={ArrowIcon} alt={ArrowIcon} />
          </span>{" "}
          {props.footerName1}
        </li>
        <li className="flex gap-[10px] cursor-pointer">
          {" "}
          <span>
            <Image src={ArrowIcon} alt={ArrowIcon} />
          </span>{" "}
          {props.footerName2}
        </li>
        <li className="flex gap-[10px] cursor-pointer">
          {" "}
          <span>
            <Image src={ArrowIcon} alt={ArrowIcon} />
          </span>{" "}
          {props.footerName3}
        </li>
        <li className="flex gap-[10px] cursor-pointer">
          {" "}
          <span>
            <Image src={ArrowIcon} alt={ArrowIcon} />
          </span>{" "}
          {props.footerName4}
        </li>
        <li className="flex gap-[10px] cursor-pointer">
          {" "}
          <span>
            <Image src={ArrowIcon} alt={ArrowIcon} />
          </span>{" "}
          {props.footerName5}
        </li>
      </ul>
    </div>
  );
};

export default FooterLink;
