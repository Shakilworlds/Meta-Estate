import React from "react";
import styles from "../style";
import Image from "next/image";
import OurCaprabilitiesImage from "../.../../../../public/assets/ourCapabilities.png";
import Badge from "../Badge/Badge";
import Button from "../Button/ButtonFill2";
import { HiArrowLongRight } from "react-icons/hi2";

const OurCapabilities = () => {
  return (
    <div className={`${styles.sectionPaddingY} container`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
        <div>
          <Image src={OurCaprabilitiesImage} alt="Image" />
        </div>
        <div>
          <Badge>our capabilities</Badge>
          <h2 className={`${styles.heading} pt-4`}>
            Forward Thinking Team Of Designers & Developers
          </h2>
          <p className={`${styles.paragraph} pt-6`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio vel
            vestibulum purus egestas gravida commodo. Cursus in id rhoncus
            condimentum augue et vitae, non. Viverra adipiscing adipiscing est
            mattis et sem mi vulputate mi. Pellentesque in nulla consequat nibh
            erat aliquam convallis fames. Lectus pretium at odio quisque. Nunc
            sollicitudin lectus proin morbi arcu sociis.
            <span >
              <p className="pt-5">
              Amet mattis eget erat blandit porta quam molestie netus amet. Egestas vel turpis elementum dui nibh egestas. Mauris sed urna, lobortis pellentesque vitae vitae purus elementum. In ultrices gravida eget nisl pellentesque pharetra pellentesque. Id eu semper tempus, pulvinar vitae sagittis volutpat euismod. Porttitor mi egestas ut dui fermentum, potenti diam. 
              </p>
            </span>
          </p>

          <div className="inline-block pt-10">
          <Button>
            Explore Now{" "}
            <span className="text-2xl">
              <HiArrowLongRight />
            </span>{" "}
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;
