import React from "react";
import styles from "../style";
import Badge from "../Badge/Badge";
import ServiceCard from "./ServiceCard";
import { serviceData } from "@/pages/data/Data";

const Services = () => {
  return (
    <div className={`${styles.sectionPaddingY} bg-[#F5F4F7]`}>
      <div className={` container`}>
        {/* Title  */}
        <div>
          {/* Badge */}
          <div className={`${styles.flexCenter} pb-4 `}>
            <Badge>Service</Badge>
          </div>

          {/* Title Text */}
          <h2 className={`${styles.heading} text-center`}>
            Our All Exclusive Services
          </h2>
        </div>

        {/* Service */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[60px]">
          <ServiceCard
          imgUrl={serviceData[0].imgUrl}
          title={serviceData[0].title}
          discription={serviceData[0].discription}
          />
          <ServiceCard
          imgUrl={serviceData[1].imgUrl}
          title={serviceData[1].title}
          discription={serviceData[1].discription}
          />
          <ServiceCard
          imgUrl={serviceData[2].imgUrl}
          title={serviceData[2].title}
          discription={serviceData[2].discription}
          />
          <ServiceCard
          imgUrl={serviceData[3].imgUrl}
          title={serviceData[3].title}
          discription={serviceData[3].discription}
          />
          <ServiceCard
          imgUrl={serviceData[4].imgUrl}
          title={serviceData[4].title}
          discription={serviceData[4].discription}
          />
          <ServiceCard
          imgUrl={serviceData[5].imgUrl}
          title={serviceData[5].title}
          discription={serviceData[5].discription}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
