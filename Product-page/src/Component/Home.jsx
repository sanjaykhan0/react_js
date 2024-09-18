import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [mobileStyle, setMobileStyle] = useState({ display: "none" });

  let HandleMobile = () => {
    setMobileStyle({ display: "block" });
  };
  const [laptopStyle, setlaptopStyle] = useState({ display: "none" });

  let Handlelaptop = () => {
    setlaptopStyle({ display: "block" });
  };
  const [oneplusStyle, setOneplusStyle] = useState({ display: "none" });
  let Handleoneplus = () => {
    setOneplusStyle({ display: "block" });
  };
  const [realmeStyle, setRealmeStyle] = useState({ display: "none" });

  const Handlerealme = () => {
    setRealmeStyle({ display: "block" });
  };

  const [redmiStyle, setRedmiStyle] = useState({ display: "none" });

  const Handleredmi = () => {
    setRedmiStyle({ display: "block" });
  };
  const [motoStyle, setMotoStyle] = useState({ display: "none" });

  const Handlemoto = () => {
    setMotoStyle({ display: "block" });
  };
  const [appleStyle, setAppleStyle] = useState({ display: "none" });

  const Handleapple = () => {
    setAppleStyle({ display: "block" });
  };
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo"></div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search For Products"
              className="Search-Products"
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>

          <div className="login">
            <span>
              <i class="fa-solid fa-circle-user"></i> &nbsp;<font>Login</font>
            </span>
            <span>
              <i class="fa-solid fa-cart-shopping"></i>&nbsp; <font>cart</font>
            </span>
            <span>
              <i class="fa-solid fa-shop"></i>&nbsp;{" "}
              <font>Become a Seller</font>
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "60vh",
          width: "100%",
          backgroundColor: "gray",
          marginTop: "10px",
          overflow:"hidden"
        }}
      >
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/db2ccb0b7fdeb463.jpg?q=90"
          alt=""
          style={{ height: "100%" }}
        />
      </div>
      <div
        className="container"
        style={{
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          gap: "1%",
        }}
      >
        <div
          className="product1"
          style={{
            height: "100%",
            width: "24%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "2%",
          }}
          onClick={HandleMobile}
        >
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/d/z/-original-imah4jywfm9uuvzw.jpeg?q=70"
            alt=""
            style={{ height: "70%", marginBottom: "4%" }}
          />
          <h4>Mobile</h4>
        </div>
        <div
          className="product2"
          style={{
            height: "100%",
            width: "24%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "2%",
          }}
          onClick={Handlelaptop}
        >
          <img
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/4/a/2/z8-415-thin-and-light-laptop-acer-original-imahfqgfpekf8z2a.jpeg?q=70&crop=false"
            alt=""
            style={{ height: "70%", marginBottom: "4%" }}
          />
          <h4>Laptop</h4>
        </div>
        <div
          className="product3"
          style={{
            height: "100%",
            width: "24%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "2%",
          }}
        >
          <img
            src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-bear-teddy-toy-png-image_10149481.png"
            alt=""
            style={{ height: "70%", marginBottom: "4%" }}
          />
          <h4>Toy</h4>
        </div>
        <div
          className="product4"
          style={{
            height: "100%",
            width: "24%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "2%",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp7SmlZGRIQ5H41LKEM71MfuSO-Ad8OSuXQ&s"
            alt=""
            style={{ height: "70%", marginBottom: "4%" }}
          />
          <h4>furniture</h4>
        </div>
        <div
          className="product5"
          style={{
            height: "100%",
            width: "24%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "2%",
          }}
        >
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/93/97/27/1000_F_593972766_NqODcN7TnatW5W9zxQG7fKuRNQwpIb7U.jpg"
            alt=""
            style={{ height: "70%", marginBottom: "4%" }}
          />
          <h4>Fashion</h4>
        </div>
      </div>
      <div className="mobile" style={mobileStyle}>
        <br />
        <div className="container company">
          <div className="mobile1" onClick={Handleoneplus}></div>
          <div className="mobile2" onClick={Handlerealme}></div>
          <div className="mobile3" onClick={Handleredmi}></div>
          <div className="mobile4" onClick={Handlemoto}></div>
          <div className="mobile5" onClick={Handleapple}></div>
        </div>
        <br />
        <br />
        <div className="mobile-banner"></div>
      </div>

      {/* oneplus */}

      <div className="oneplus" style={oneplusStyle}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <div className="col-6 oneplus-1"></div>

            <div className="col-6 oneplus-2">
              <h3>
                OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB
                Storage)
              </h3>
              <font style={{ color: "green", fontSize: "12px" }}>
                Visit the OnePlus Store
              </font>
              <br />
              <font style={{ color: "black", fontSize: "12px" }}>
                4K+ bought in past month
              </font>
              <hr />
              <font style={{ color: "red", fontSize: "24px" }}>-17%</font>
              &nbsp;&nbsp;
              <font style={{ color: "black", fontSize: "24px" }}>₹16,640</font>
              <br />
              <font style={{ color: "gray", fontSize: "10px" }}>
                M.R.P : <del>₹19,999</del>{" "}
              </font>
              <br />
              <br />
              <font>
                <h6 style={{ display: "inline-block" }}>EMI </h6> starts at
                ₹807. No Cost EMI available{" "}
              </font>
              <h6 style={{ display: "inline-block", color: "green" }}>
                EMI option
              </h6>
              <hr />
              <h6>Offers</h6>
              <div className="offers">
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>No Cost EMI</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    No Cost EMI Upto ₹749.30 EMI interest savings on Amazon Pay
                    ICICI…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Bank Offer</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Upto ₹100.00 discount on Credit Cards…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Partner Offers </h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Get GST invoice and save up to 28% on business purchases.
                  </font>
                </div>
              </div>
              <br />
              <center>
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#F6CA00",
                  }}
                >
                  Add to Cart
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#FFA41C",
                  }}
                >
                  Buy Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
      {/* realme   */}
      <div className="oneplus" style={realmeStyle}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <div className="col-6 realme-1"></div>

            <div className="col-6 oneplus-2">
              <h3>
                realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,256GB Storage)
                Dimensity 7050 5G Chipset | Horizon Glass Design
              </h3>
              <font style={{ color: "green", fontSize: "12px" }}>
                Visit the OnePlus Store
              </font>
              <br />
              <font style={{ color: "black", fontSize: "12px" }}>
                4K+ bought in past month
              </font>
              <hr />
              <font style={{ color: "red", fontSize: "24px" }}>-30%</font>
              &nbsp;&nbsp;
              <font style={{ color: "black", fontSize: "24px" }}>₹18,990</font>
              <br />
              <font style={{ color: "gray", fontSize: "10px" }}>
                M.R.P : <del>₹26,999</del>{" "}
              </font>
              <br />
              <br />
              <font>
                <h6 style={{ display: "inline-block" }}>EMI </h6> starts at
                ₹807. No Cost EMI available{" "}
              </font>
              <h6 style={{ display: "inline-block", color: "green" }}>
                EMI option
              </h6>
              <hr />
              <h6>Offers</h6>
              <div className="offers">
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>No Cost EMI</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    No Cost EMI Upto ₹749.30 EMI interest savings on Amazon Pay
                    ICICI…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Bank Offer</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Upto ₹100.00 discount on Credit Cards…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Partner Offers </h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Get GST invoice and save up to 28% on business purchases.
                  </font>
                </div>
              </div>
              <br />
              <center>
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#F6CA00",
                  }}
                >
                  Add to Cart
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#FFA41C",
                  }}
                >
                  Buy Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>

      {/* redmi */}
      <div className="oneplus" style={redmiStyle}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <div className="col-6 redmi-1"></div>

            <div className="col-6 oneplus-2">
              <h3>
                Redmi Note 13 5G (Chromatic Purple, 12GB RAM, 256GB Storage)
              </h3>
              <font style={{ color: "green", fontSize: "12px" }}>
                Visit the OnePlus Store
              </font>
              <br />
              <font style={{ color: "black", fontSize: "12px" }}>
                4K+ bought in past month
              </font>
              <hr />
              <font style={{ color: "red", fontSize: "24px" }}>-30%</font>
              &nbsp;&nbsp;
              <font style={{ color: "black", fontSize: "24px" }}>₹18,990</font>
              <br />
              <font style={{ color: "gray", fontSize: "10px" }}>
                M.R.P : <del>₹26,999</del>{" "}
              </font>
              <br />
              <br />
              <font>
                <h6 style={{ display: "inline-block" }}>EMI </h6> starts at
                ₹807. No Cost EMI available{" "}
              </font>
              <h6 style={{ display: "inline-block", color: "green" }}>
                EMI option
              </h6>
              <hr />
              <h6>Offers</h6>
              <div className="offers">
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>No Cost EMI</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    No Cost EMI Upto ₹749.30 EMI interest savings on Amazon Pay
                    ICICI…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Bank Offer</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Upto ₹100.00 discount on Credit Cards…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Partner Offers </h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Get GST invoice and save up to 28% on business purchases.
                  </font>
                </div>
              </div>
              <br />
              <center>
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#F6CA00",
                  }}
                >
                  Add to Cart
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#FFA41C",
                  }}
                >
                  Buy Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>

      {/* motorola */}

      <div className="oneplus" style={motoStyle}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <div className="col-6 moto-1"></div>

            <div className="col-6 oneplus-2">
              <h3>
                Motorola Edge 50 Fusion 5G (Marshmallow Blue, 8GB RAM, 128GB
                Storage)
              </h3>
              <font style={{ color: "green", fontSize: "12px" }}>
                Visit the OnePlus Store
              </font>
              <br />
              <font style={{ color: "black", fontSize: "12px" }}>
                4K+ bought in past month
              </font>
              <hr />
              <font style={{ color: "red", fontSize: "24px" }}>-30%</font>
              &nbsp;&nbsp;
              <font style={{ color: "black", fontSize: "24px" }}>₹18,990</font>
              <br />
              <font style={{ color: "gray", fontSize: "10px" }}>
                M.R.P : <del>₹26,999</del>{" "}
              </font>
              <br />
              <br />
              <font>
                <h6 style={{ display: "inline-block" }}>EMI </h6> starts at
                ₹807. No Cost EMI available{" "}
              </font>
              <h6 style={{ display: "inline-block", color: "green" }}>
                EMI option
              </h6>
              <hr />
              <h6>Offers</h6>
              <div className="offers">
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>No Cost EMI</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    No Cost EMI Upto ₹749.30 EMI interest savings on Amazon Pay
                    ICICI…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Bank Offer</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Upto ₹100.00 discount on Credit Cards…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Partner Offers </h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Get GST invoice and save up to 28% on business purchases.
                  </font>
                </div>
              </div>
              <br />
              <center>
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#F6CA00",
                  }}
                >
                  Add to Cart
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#FFA41C",
                  }}
                >
                  Buy Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>



      {/* apple */}

      <div className="oneplus" style={appleStyle}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <div className="col-6 apple-1"></div>

            <div className="col-6 oneplus-2">
              <h3>
              Apple iPhone 16 Pro (1 TB) - Black Titanium
              </h3>
              <font style={{ color: "green", fontSize: "12px" }}>
                Visit the OnePlus Store
              </font>
              <br />
              <font style={{ color: "black", fontSize: "12px" }}>
                4K+ bought in past month
              </font>
              <hr />
              <font style={{ color: "red", fontSize: "24px" }}>-30%</font>
              &nbsp;&nbsp;
              <font style={{ color: "black", fontSize: "24px" }}>₹1,69,900</font>
              <br />
              <font style={{ color: "gray", fontSize: "10px" }}>
                M.R.P : <del>₹2,20,999</del>{" "}
              </font>
              <br />
              <br />
              <font>
                <h6 style={{ display: "inline-block" }}>EMI </h6> starts at
                ₹807. No Cost EMI available{" "}
              </font>
              <h6 style={{ display: "inline-block", color: "green" }}>
                EMI option
              </h6>
              <hr />
              <h6>Offers</h6>
              <div className="offers">
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>No Cost EMI</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    No Cost EMI Upto ₹749.30 EMI interest savings on Amazon Pay
                    ICICI…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Bank Offer</h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Upto ₹100.00 discount on Credit Cards…
                  </font>
                </div>
                <div className="offer1" style={{ padding: "10px" }}>
                  <h6>Partner Offers </h6>
                  <font style={{ fontSize: "11px", lineHeight: "10px" }}>
                    Get GST invoice and save up to 28% on business purchases.
                  </font>
                </div>
              </div>
              <br />
              <center>
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#F6CA00",
                  }}
                >
                  Add to Cart
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{
                    padding: "5px 55px",
                    borderRadius: "25px",
                    border: "none",
                    backgroundColor: "#FFA41C",
                  }}
                >
                  Buy Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>



      <div className="mobile" style={laptopStyle}>
        <br />
        <div className="container company">
          <div className="laptop1" onClick={Handleoneplus}></div>
          <div className="laptop2" onClick={Handlerealme}></div>
          <div className="laptop3" onClick={Handleredmi}></div>
          <div className="laptop4" onClick={Handlemoto}></div>
          <div className="laptop5" onClick={Handleapple}></div>
        </div>
        <br />
        <br />
        <div className="laptop-banner"></div>
      </div>
    </>
  );
}
