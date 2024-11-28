import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

export default function Tech() {
  return (
    <div className="lg:mt-40 mb-20">
      <hr />

      <div className="work xl:mx-60 mx-20  mt-16">
        <font className="text-secondary">My Skills</font>
        <h1 className="text-white text-[40px] font-bold">Skills.</h1>
      </div>
      <div className="w-full flex justify-center mt-16  ">
        <div className="flex flex-row flex-wrap justify-center gap-10 sm:gap-x-16 xl:w-[50vw]  w-2/3">
          {technologies.map((tech, i) => {
            return (
              <div
                className=" w-16 sm:h-16 lg:w-28 lg:h-28 flex justify-center"
                key={i}
              >
                <BallCanvas icon={tech.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
