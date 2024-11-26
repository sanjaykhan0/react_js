import React from "react";
import { motion } from "framer-motion"; ~

export default function About() {
  const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };
  return (
    <div >
      <div className={`intro px-52 w-full flex flex-col items-start py-5 bg-primary mt-20 `}>
        <font className="text-secondary">introduction</font>
        <h1 className="text-white text-[40px] font-bold">Overview</h1><br />
        <p className="w-2/4 text-secondary ">
          As a Full Stack Developer, I create responsive web applications using
          React.js for front-end and add more functionality like a
          GSAP,Lenis,Framework etc. and Node.js, Express, MongoDB for back-end
          ensuring seamless integration, scalability, and security across the
          entire stack for efficient, user-friendly applications.
        </p>
      </div>
      <div className=""></div>

    </div>
  );
}
