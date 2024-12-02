import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apifetch } from "../Features0/Features";
import { useNavigate } from "react-router-dom";

export default function Women() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(apifetch());
  }, [dispatch]);

  const Womendata = useSelector((state) => state.apikey.data);

  const home = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-50 p-8 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-extrabold text-purple-600 mb-6 drop-shadow-lg">
        Women's Clothing
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {Womendata &&
          Womendata.map(
            (e, i) =>
              e.category === "women's clothing" && (
                <div
                  key={i}
                  className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
                >
                  <div className="relative group">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-60 w-full object-contain bg-gray-50"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                      <span className="text-white text-lg font-medium">
                        Quick View
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-bold text-gray-700 truncate">
                      {e.title}
                    </h2>
                    <p className="text-sm text-gray-500">{e.category}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Rating: {e.rating.rate} ({e.rating.count} reviews)
                    </p>
                  </div>
                </div>
              )
          )}
      </div>

      <button
        onClick={home}
        className="h-10 w-32 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl transition duration-300"
      >
        Back
      </button>
    </div>
  );
}
