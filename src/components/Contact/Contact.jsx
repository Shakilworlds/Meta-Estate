import React from "react";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "../Button/ButtonFill2";
import ContactForm from "./ContactForm";
import MapImage from "../../../public/assets/map.png";

const Contact = () => {
  return (
    <div>
      <div className="container py-[120px]">
        <div className="p-6 lg:p-12 border-[1px] border-primary rounded-2xl shadow-5xl">
          <h2 className="font-FTMilky font-black text-4xl text-black text-center">
            Let’s stay connected
          </h2>

          {/* Form */}
          <div className="pt-11">
            <ContactForm />
          </div>

          {/* Button */}
          <div className="pt-10 flex ">
            <Button>
              Explore Now{" "}
              <span className="text-2xl">
                <HiArrowLongRight />
              </span>{" "}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Location */}
      <div>
        <Image src={MapImage} alt={Image} />
      </div>
    </div>
  );
};

export default Contact;
