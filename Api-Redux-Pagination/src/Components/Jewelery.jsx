import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apifetch } from "../Features0/Features";
import { useNavigate } from "react-router-dom";

export default function Jewelery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(apifetch());
  }, [dispatch]);

  const jewelery = useSelector((state) => state.apikey.data);

  const home = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-8 flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl font-bold text-center mb-12 text-indigo-800 drop-shadow-lg">
        Jewelery Collection
      </h1>
      <div className="container border p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
        {jewelery &&
          jewelery.map(
            (e, i) =>
              e.category === "jewelery" && (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200 overflow-hidden"
                >
                  <div className="relative group">
                    <img
                      src={e.image}
                      alt=""
                      className="h-60 w-full object-contain bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                      <span className="text-white text-lg font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <span className="block text-xl font-semibold text-gray-700">
                      {e.id}
                    </span>
                    <span className="block text-lg font-medium text-gray-500">
                      {e.category}
                    </span>
                    <span className="block text-lg font-medium text-gray-500">
                      ${e.price}
                    </span>
                  </div>
                </div>
              )
          )}
      </div>

      <button
        onClick={home}
        className="h-10 w-32 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition duration-300 ease-in-out"
      >
        Back
      </button>
    </div>
  );
}
