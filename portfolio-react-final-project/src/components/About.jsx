import React, { useRef, useEffect } from "react";
import "./About.css";
import { web } from "../assets";

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

  const cardRef = useRef(null);
  const glareRef = useRef(null);
  let cachedCardDomRect = null;

  useEffect(() => {
    const card = cardRef.current;
    const glare = glareRef.current;

    card.onmouseenter = (e) =>
      (cachedCardDomRect = e.target.getBoundingClientRect());

    card.onmouseleave = (e) => {
      card.animate(
        { transform: "rotateX(0deg) rotateY(0deg)" },
        { duration: 250, fill: "forwards", delay: 50 }
      );
    };

    card.onmousemove = (e) => {
      if (!cachedCardDomRect) return;

      let xCoord = e.clientX - cachedCardDomRect.left;
      let yCoord = e.clientY - cachedCardDomRect.top;
      let xDegreesToRotate =
        (20 - 20 * (yCoord / cachedCardDomRect.height)) * -1;
      let yDegreesToRotate = 20 - 40 * (xCoord / cachedCardDomRect.width);

      card.animate(
        {
          transform: `rotateX(${xDegreesToRotate}deg) rotateY(${yDegreesToRotate}deg)`,
        },
        { duration: 500, fill: "forwards", delay: 50 }
      );

      glare.animate(
        {
          transform: `translateX(${xCoord - 500}px) translateY(${
            yCoord - 500
          }px)`,
        },
        { duration: 0, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div>
      <div
        className={`intro px-52 w-full flex flex-col items-start py-5 bg-primary mt-20 `}
      >
        <font className="text-secondary">introduction</font>
        <h1 className="text-white text-[40px] font-bold">Overview</h1>
        <br />
        <p className="w-2/4 text-secondary ">
          As a Full Stack Developer, I create responsive web applications using
          React.js for front-end and add more functionality like a
          GSAP,Lenis,Framework etc. and Node.js, Express, MongoDB for back-end
          ensuring seamless integration, scalability, and security across the
          entire stack for efficient, user-friendly applications.
        </p>
      </div>

      {/* card  */}
      <div className="">
        <section>
          <div className="container">
            
              <div ref={cardRef} className="card border"  style={{  padding:"50px 0px "}}>
                <div className="card_thumbnail" >
                  <img src={web} style={{ height: "70px", }} />
                  <div className="card_thumbmail_shadow"></div>
                </div>
                <p className="card_caption font-[10px]" style={{  padding:"0px 10px ",boxSizing:"border-box"}}>Web Developer </p>
                <div ref={glareRef} className="glare"></div>
              </div>
            
          </div>
        </section>
      </div>
    </div>
  );
}
