<<<<<<< HEAD
import React, { useEffect } from "react";
import "./Section2.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Section2() {

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

=======
import React from "react";
import "./Section2.css";

export default function Section2() {
>>>>>>> 7ccfeb4b79d1c82a06202ceacff028c3a8e52443
  let img1 =
    "https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/bg-6.png";

  return (
    <div className="pt-5">
      <div className="container s-2 mt-5 mb-5">
<<<<<<< HEAD
        <div className="col-12 col-md-5 player " data-aos="zoom-out-up">
          <img src={img1} alt="" />
        </div>
        <div className="col-12 col-md-7 matches " data-aos="fade-left">
=======
        <div className="col-12 col-md-5 player">
          <img src={img1} alt="" />
        </div>
        <div className="col-12 col-md-7 matches">
>>>>>>> 7ccfeb4b79d1c82a06202ceacff028c3a8e52443
          <div className="info-main">
            <div className="year">
              <div id="y2016">2016</div>
              <span id="circle"></span>
              <h1>04:01</h1>
            </div>
<<<<<<< HEAD
            <div className="info-para ">
=======
            <div className="info-para">
>>>>>>> 7ccfeb4b79d1c82a06202ceacff028c3a8e52443
              <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae...
              </p>
            </div>
          </div>

          <div className="info-main">
            <div className="year">
              <div id="y2016">2016</div>
              <span id="circle"></span>
              <h1>01:00</h1>
            </div>
            <div className="info-para">
                 <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae...
              </p>
            </div>
          </div>

          <div className="info-main">
            <div className="year">
              <div id="y2016">2016</div>
              <span id="circle"></span>
              <h1>03:02</h1>
            </div>
            <div className="info-para">
            <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
