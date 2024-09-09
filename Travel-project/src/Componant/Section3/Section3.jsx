import React from "react";
import "./Section3.css";
export default function Section3() {
  return (
    <div>
      <div className=" section3">
        <div className="container hero-bg-sec3">
          <div className="fade-white-sec3"></div>
          <div className="fade-black-sec3"></div>
        </div>
        <div className="container sec3-main">
          <div className="row section3-row">
            <div className="col-12 col-xl-6 section3-col-1"></div>

            <div className="col-12 col-xl-6 section3-col-2">
              <span>
                <h3 className="sec3-woeds">a few words</h3>
                <h1 className="sec3-about">About Us</h1>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                </p>

                <button className="section3-btn">View All Tours</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
