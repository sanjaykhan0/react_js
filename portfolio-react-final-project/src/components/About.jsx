import React, { useRef, useEffect } from "react";
import "./About.css";
import webImage from "../assets/web.png";
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import AOS from "aos";
import "aos/dist/aos.css";

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

    const handleMouseEnter = (e) => {
      cachedCardDomRect = e.target.getBoundingClientRect();
    };

    const handleMouseLeave = () => {
      card.animate(
        { transform: "rotateX(0deg) rotateY(0deg)" },
        { duration: 250, fill: "forwards", delay: 50 }
      );
    };

    const handleMouseMove = (e) => {
      if (!cachedCardDomRect) return;

      const xCoord = e.clientX - cachedCardDomRect.left;
      const yCoord = e.clientY - cachedCardDomRect.top;

      const xDegreesToRotate =
        (20 - 20 * (yCoord / cachedCardDomRect.height)) * -1;
      const yDegreesToRotate = 20 - 40 * (xCoord / cachedCardDomRect.width);

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

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="xl:px-60 px-20">
      <div
        className={`intro  w-full flex flex-col items-start py-5 bg-primary mt-20 `}
        data-aos="fade-right"
      >
        <font className="text-secondary">introduction</font>
        <h1 className="text-white text-[40px] font-bold">Overview</h1>
        <br />
        <p className="w-4/5 lg:w-2/3  text-secondary ">
          As a Full Stack Developer, I create responsive web applications using
          React.js for front-end and add more functionality like a
          GSAP,Lenis,Framework etc. and Node.js, Express, MongoDB for back-end
          ensuring seamless integration, scalability, and security across the
          entire stack for efficient, user-friendly applications.
        </p>
      </div>

      {/* card */}
      <div className="main-3d flex lg:justify-start sm:justify-center gap-5 sm:gap-16 flex-wrap ">
        <div ref={cardRef} className="tilt" data-aos="zoom-in">
          <div className="container">
            <div className="tilt-box-wrap">
              {Array(9)
                .fill(0)
                .map((_, idx) => (
                  <span key={idx} className="t_over"></span>
                ))}

              <div className="tilt-box flex flex-col items-center">
                <strong className="mb-5 px-3">
                  <img src={webImage} alt="" className="h-[50px]  m-10" /> <br />
                  Web
                  <br /> Developer
                </strong>
              </div>
            </div>
            <div ref={glareRef} className="glare"></div>
          </div>
        </div>

        {/* 2 */}
        <div ref={cardRef} className="tilt" data-aos="zoom-in">
          <div className="container">
            <div className="tilt-box-wrap">
              {Array(9)
                .fill(0)
                .map((_, idx) => (
                  <span key={idx} className="t_over"></span>
                ))}

              <div className="tilt-box flex flex-col items-center">
                <strong className="mb-5 px-3">
                  <img src={mobile} alt="" className="h-[50px] m-10" /> <br />
                  Frontend
                  <br /> Developer
                </strong>
              </div>
            </div>
            <div ref={glareRef} className="glare"></div>
          </div>
        </div>
        {/* 3 */}
        <div ref={cardRef} className="tilt" data-aos="zoom-in">
          <div className="container">
            <div className="tilt-box-wrap">
              {Array(9)
                .fill(0)
                .map((_, idx) => (
                  <span key={idx} className="t_over"></span>
                ))}

              <div className="tilt-box flex flex-col items-center">
                <strong className="mb-5 px-3">
                  <img src={backend} alt="" className="h-[50px] m-10" /> <br />
                  Backend
                  <br /> Developer
                </strong>
              </div>
            </div>
            <div ref={glareRef} className="glare"></div>
          </div>
        </div>
        {/* 4 */}
        <div ref={cardRef} className="tilt" data-aos="zoom-in">
          <div className="container">
            <div className="tilt-box-wrap">
              {Array(9)
                .fill(0)
                .map((_, idx) => (
                  <span key={idx} className="t_over"></span>
                ))}

              <div className="tilt-box flex flex-col items-center">
                <strong className="mb-5 px-3">
                  <img src={creator} alt="" className="h-[50px] m-10" /> <br />
                  Content <br /> Creator
                </strong>
              </div>
            </div>
            <div ref={glareRef} className="glare"></div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
