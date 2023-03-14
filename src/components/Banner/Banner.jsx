
import Image from "next/image";
import BannerImage from "../../../public/assets/bannerImage.png";
import BannerText from "./BannerText";
import NavBar from "../Navbar/NavBar";

const Banner = () => {
  return (
    <div className="">
      <div className="relative">
      <div className="absolute  w-full">
        <NavBar />
        <BannerText />
      </div>
      <Image src={BannerImage} alt="Image" className=" sm:h-[800px] lg:h-[964px] max-h-full  -z-10" />
    </div>
    </div>
  );
};

export default Banner;
