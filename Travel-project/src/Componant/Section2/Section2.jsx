import React from "react";
import "./Section2.css";

export default function Section2() {
  return (
    <div>
      <div className="section2">
        <div className="container hero-bg-sec2">
          <div className="fade-white-sec2"></div>
          <div className="fade-black-sec2"></div>
        </div>

        <div className="row section2-row">
          <div className="col-12 col-lg-6 section2-col-1 ">
            <span>
              <h3 className="a few words">our most</h3>
              <h1 className="popular-tours">Popular Tours</h1>
              <button className="section2-btn">View All Tours</button>
            </span>
          </div>

          <div className="col-12 col-lg-6 section2-col">
            <div className="sec2-card col-12 col-sm-3">
              <div className="card-body">
                <h3 className="card-body-heading">Maldives</h3>
                <div className="card-body-line" ></div>
                <h1 className="card-body-title">Sunny Ari Atoll</h1>
                <i className="card-body-price">$2350.00</i>
              </div>
            </div>
            <div className="sec2-card-1 col-12 col-sm-3">
            <div className="card-body">
                <h3 className="card-body-heading">England</h3>
                <div className="card-body-line" ></div>
                <h1 className="card-body-title">Majestic Big Ben</h1>
                <i className="card-body-price">$1635.00</i>
              </div>
            </div>
            <div className="sec2-card-2 col-12 col-sm-3">
            <div className="card-body">
                <h3 className="card-body-heading">Italy</h3>
                <div className="card-body-line" ></div>
                <h1 className="card-body-title">Discover Venice</h1>
                <i className="card-body-price">$1550.00</i>
              </div>
            </div>
            <div className="sec2-card-3 col-12 col-sm-3">
            <div className="card-body">
                <h3 className="card-body-heading">Turkey</h3>
                <div className="card-body-line" ></div>
                <h1 className="card-body-title">Historical Istanbul</h1>
                <i className="card-body-price">$1295.00</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
