import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const menscategory = () => {
    navigate("/Mens");
  };
  const Women = () => {
    navigate("/Womens");
  };
  const Jewelery = () => {
    navigate("/Jewelery");
  };
  const Electronics = () => {
    navigate("/Electronics");
  };
  const Random = () => {
    navigate("/Random");
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImg("https://preview.colorlib.com/theme/fashi/img/hero-2.jpg");
    }, 4000);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);
  const [img, setImg] = useState(
    "https://preview.colorlib.com/theme/fashi/img/hero-1.jpg"
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImg("https://preview.colorlib.com/theme/fashi/img/hero-1.jpg");
    }, 10000);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

   useEffect(() => {
    const timeout = setTimeout(() => {
      setImg("https://preview.colorlib.com/theme/fashi/img/hero-2.jpg");
    }, 14000);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <>
      <button className="border w-24 absolute top-2 right-10" >Cart</button>
      <div className="hero h-[62vh] relative border">
        <img src={img} alt="" className="image1 absolute" />
        <span className="absolute m-20">
          <h4 className="text-yellow-500">BAG,KIDS</h4>
          <h1 className="text-[4vw] font-bold">Black Friday</h1>
          <p className="w-[40%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            qui quaerat veniam rerum voluptatibus velit eum quas quos nemo.
          </p>
          <button className="p-4 bg-yellow-500 rounded mt-4  ">SHOP NOW</button>
        </span>
      </div>

      <div className="catagory h-[40vh] w-full  flex justify-evenly gap-10">
        <button onClick={menscategory} className=" mens  border w-[90%]  relative">
          <img src="https://preview.colorlib.com/theme/fashi/img/banner-1.jpg  " className="opacity-80" alt="" />
          <h1 className="absolute top-[35%] left-[35%] font-bold text-[50px]">Men's</h1>
        </button>
        <button onClick={Women} className=" mens  border w-[90%]  relative">
        <img src="https://preview.colorlib.com/theme/fashi/img/banner-2.jpg " className="opacity-80" alt="" />
        
          <h1 className="absolute top-[35%] left-[30%] font-bold text-[50px]">Women's</h1>
        </button>
        <button onClick={Jewelery} className=" mens  border w-[90%] relative">
        <div className="kids "></div>
        <img src="https://preview.colorlib.com/theme/fashi/img/banner-3.jpg " className="opacity-80" alt="" />
          <h1 className="absolute top-[35%] left-[35%] font-bold text-[50px]">Kid's</h1>
          
        </button>
      </div>
    </>
  );
}
