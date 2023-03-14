"use client";
import React, { useState } from "react";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import NavLink from "@/components/Navbar/NavLink";
import Button from "../Button/Button";
import Link from "next/link";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div>
      <div className="container py-4 flex items-center justify-between ">
        {/* Brand Logo */}
        <span>
          <Image src={Logo} alt={Logo} height={44} width={195} />
        </span>

        <span
          onClick={handleNavToggle}
          className="absolute top-6 right-4 text-white text-2xl z-[99] lg:hidden"
        >
          {toggleNav ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
        </span>

        {/* Desktop Nav */}
        <div className=" hidden lg:flex items-center space-x-7 ">
          <div className="items-center text-base font-normal pr-[100px]">
            {/*Desktop NavLinks */}
            <NavLink />
          </div>

          {/* Button */}

          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
        </div>

        {/* Mobile Nav */}

        {toggleNav ? (
          <div className="absolute bg-primary p-4 top-[60px] right-4 space-y-4 rounded-md">
            {/*Mobile NavLinks */}
            <NavLink />
            {/* Button */}
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
