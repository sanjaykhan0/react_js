import React from "react";
import { ComputersCanvas } from "./canvas";

export default function Hero() {
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
  let name = "Sanjay";
 

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-x-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" ></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient" ></div>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText}text-white`}>
              Hi I'm <span className="text-[#915eff]">{name}</span>
            </h1>
            <p className={`${styles.heroSubText}text-white-100`}>
            i develop 3d visuals, user <br className="sm:block hidden " /> interfaces and web application
            </p>
          </div>
      </div>
          <ComputersCanvas/>
    </section>
  );
}
