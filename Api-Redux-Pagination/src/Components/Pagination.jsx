import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apifetch } from "../Features0/Features";

export default function Pagination() {
  const dispatch = useDispatch();
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
  const AllData = useSelector((state) => state.apikey.data);

  useEffect(() => {
    dispatch(apifetch());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center  gap-4 p-4">
        <div
          className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer"
          onClick={menscategory}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuySzvJZiEXGPplTqh0784cgo1UbO5nzhZ7A&s"
            alt=""
            className="h-72 w-auto object-cover rounded-lg"
          />
          <div className="text-lg font-bold mt-2"> </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer"
          onClick={Women}
        >
          <img
            src="https://anantacreative.com/wp-content/uploads/2020/10/FashionGirl11.png"
            alt=""
            className="h-72 w-auto object-cover rounded-lg"
          />
          <div className="text-lg font-bold mt-2"> </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer"
          onClick={Jewelery}
        >
          <img
            src="https://www.shutterstock.com/image-vector/jewelry-logo-symbol-design-beautiful-260nw-1364555576.jpg"
            alt=""
            className="h-72  object-cover rounded-lg"
          />
          <div className="text-lg font-bold mt-2"></div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer"
          onClick={Electronics}
        >
          <img
            src="https://img.freepik.com/premium-vector/electronics-store-logo-design-template_166742-2095.jpg"
            alt=""
            className="h-72  object-cover rounded-lg"
          />
          <div className="text-lg font-bold mt-2"></div>
        </div>
      </div>
      <br />
      <hr />
      <br /><br />
      <h1 className="text-center font-bold text-[50px] mb-10">All Product</h1>
      <div className="w-full  h-auto px-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {AllData &&
      AllData.map((e, i) => (
        <div
          className="border rounded-lg p-4 shadow-lg flex flex-col items-center hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          key={i}
        >
          <div className="mb-4">
            <img
              src={e.image}
              alt=""
              className="h-60 w-full object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold text-gray-600">
              {e.id}
            </span>
            <span className="text-lg font-medium text-gray-600">
              {e.category}
            </span>
            <span className="text-lg font-medium text-gray-600">
              ${e.price}
            </span>
          </div>
        </div>
      ))}
  </div>
</div>

    </>
  );
}
