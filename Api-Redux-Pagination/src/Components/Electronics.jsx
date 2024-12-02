import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apifetch } from "../Features0/Features";
import { useNavigate } from "react-router-dom";

export default function Electronics() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(apifetch());
  }, [dispatch]);

  const Electronics = useSelector((state) => state.apikey.data);

  const home = () => {
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-gray-100 to-blue-50 p-8 min-h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 drop-shadow-lg">
        Electronics Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {Electronics &&
          Electronics.map(
            (e, i) =>
              e.category === "electronics" && (
                <div
                  key={i}
                  className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden border border-gray-200"
                >
                  <div className="relative group">
                    <img
                      src={e.image}
                      alt=""
                      className="h-40 w-full object-contain bg-gray-50"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                      <span className="text-white text-lg font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <span className="block text-lg font-bold text-gray-700">
                      {e.id}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {e.category}
                    </span>
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
        className="h-10 w-32 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out"
      >
        Back
      </button>
    </div>
  );
}
