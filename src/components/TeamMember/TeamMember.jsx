import React from "react";
import Badge from "../Badge/Badge";
import styles from "../style";
import Member from "./Member";
import Member1 from '../../../public/assets/memberImge1.png';
import Member2 from '../../../public/assets/memberImge2.png';
import Member3 from '../../../public/assets/memberImge3.png';
import Member4 from '../../../public/assets/memberImge4.png';
import Member5 from '../../../public/assets/memberImge5.png';
import Member6 from '../../../public/assets/memberImge6.png';
import Member7 from '../../../public/assets/memberImge7.png';
import Member8 from '../../../public/assets/memberImge8.png';
import Facbook from '../../../public/assets/facebook-fill.svg';
import Instagram from '../../../public/assets/instagram-fill.svg';
import Linkedin from '../../../public/assets/Linkend.svg';
import Twitter from '../../../public/assets/twitter-fill.svg'

const TeamMember = () => {
  return (
    <div className={`${styles.sectionPaddingY} container`}>
      <div>
        {/* Title Text */}
        <span className={`${styles.flexCenter}`}>
          <Badge>Team member</Badge>
        </span>
        <h2 className={`${styles.heading} text-center pt-4`}>Our Exper Engineer</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-[60px]">
        <Member
        img={Member2}
        name='Courtney Henry'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
        <Member
        img={Member3}
        name='James Westervelt'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
        <Member
        img={Member4}
        name='James Culhane'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
        <Member
        img={Member5}
        name='Wilson Schleifer'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
        <Member
        img={Member6}
        name='Adison Vetrovs'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
        <Member
        img={Member7}
        name='Terry Gouse'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
        <Member
        img={Member8}
        name='Roger Rhiel Madsen'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
        <Member
        img={Member1}
        name='Courtney Henry'
        position='UI/UX Designer'
        discription='Psum folor sit amet, consec tetur adipiscing elit. '
        icon1={Facbook}
        icon2={Instagram}
        icon3={Linkedin}
        icon4={Twitter}
        />
      </div>
    </div>
  );
};

export default TeamMember;
