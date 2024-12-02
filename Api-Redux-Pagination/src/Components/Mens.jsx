import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apifetch } from "../Features0/Features";
import { useNavigate } from "react-router-dom";

export default function Mens() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(apifetch());
  }, [dispatch]);

  const mendata = useSelector((state) => state.apikey.data);

  const home = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 p-8 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        Men's Clothing
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {mendata &&
          mendata.map(
            (e, i) =>
              e.category === "men's clothing" && (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-56 w-full object-contain bg-gray-100"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-bold text-gray-700 truncate">
                      {e.title}
                    </h2>
                    <p className="text-sm text-gray-500">{e.category}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Rating: {e.rating.rate} ({e.rating.count} reviews)
                    </p>
                  </div>
                </div>
              )
          )}
      </div>

      <button
        onClick={home}
        className="h-10 w-32 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
      >
        Back
      </button>
    </div>
  );
}
