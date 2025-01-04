import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="w-full h-[86px] flex">
      <div className="logo h-full w-[9.2%]"></div>

      <div className="location h-full w-[16.8%] flex justify-center items-center ">
        <span className="">
        <h1 className="delivery text-[18px]">Delivery in 8 minutes</h1>
        <font className="font-locate text-[14px]"><button>Rajkot,Gujarat,India &#x25BC;</button></font>
        </span>
      </div>

      <div className="search-bar h-full w-[56.2%]  flex justify-center items-center">
        <button className="search-btn h-[55%] w-full bg-gray-100 rounded-[10px] flex justify-start items-center ps-4"><div className="search-icon fa fa-search text-[20px]"></div></button>
      </div>

      <div className="search-bar h-full w-[17.8%] flex justify-around items-center text-[20px]">
        <font>Login</font>
        <button className=" btn-cart  p-5 px-10 text-white"> My cart</button>
      </div>
    </div>
  );
}
