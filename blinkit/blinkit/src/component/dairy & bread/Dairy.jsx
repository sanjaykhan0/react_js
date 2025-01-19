import React, { useEffect, useState } from "react";
import "./Dairy.css";
import { useDispatch, useSelector } from "react-redux";
import { apifetch } from "../../redux/FeatureSlice";

export default function Dairy() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apifetch());
  }, []);

  // const fetchapi = useSelector((state) => state.feature.data);
  const {
    data: fetchapi,
    status,
    error,
  } = useSelector((state) => state.feature);

  const sidebar = [
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png",
      name: "Milk",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png",
      name: "Bread",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/954_1680251634382.png",
      name: "Flakes & Kids Cereals",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png",
      name: "Muesli & Granola",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png",
      name: "Oats",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png",
      name: "Paneer & Tofu",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/952_1657599773117.png",
      name: "Butter & More",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/2253_1694001802103.png",
      name: "Cheese",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1092_1643384330629.png",
      name: "Cream & Whitener",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/130_1643384401123.png",
      name: "Condensed Milk",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1140_1643384951835.png",
      name: "Vermicelli",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1295_1643445863467.png",
      name: "Poha, Daliya & Other Grains",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/644_1690196367179.png",
      name: "Peanut Butter",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2",
      name: "Energy Bars",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1184_1661407202472.png",
      name: "Lassi, Shakes & More",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1612_1666261789562.png",
      name: "Breakfast Mixes",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/609_1695366756108.png",
      name: "Honey & Chyawanprash",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1388_1643446601197.png",
      name: "Sausage, Salami & Ham",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1425_1643613254262.png",
      name: "Batter",
    },
  ];

  return (
    <div className="h-[100vh] w-full border flex justify-center">
      <div className="mini h-full w-[65%] border flex justify-center">
        <div className="sidebar h-full w-[21%] border pt-3 overflow-y-scroll bg-slate-100">
          {sidebar.map((item, index) => (
            <div
              key={item.name || index}
              className={`card-side h-[70px] w-full flex items-center p-2 overflow-hidden ${
                selectedIndex === index ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name || "No description"}
                  className="h-[80px] mt-16 w-[50px] object-top mr-3"
                />
              )}
              <h1 className="text-[15px]">{item.name || "No Name"}</h1>
            </div>
          ))}
        </div>

        <div className="main-content h-full w-[79%] bg-orange-100 border">
          {status === "loading" && (
            <p className="text-center mt-4 text-gray-500">Loading data...</p>
          )}
          {status === "failed" && (
            <p className="text-center mt-4 text-red-500">
              Error: {error || "Failed to fetch data"}
            </p>
          )}
          {status === "succeeded" &&
          Array.isArray(fetchapi) &&
          fetchapi.length > 0 ? (
            fetchapi
              .filter((item) => item.category === "milk")
              .map((item, index) => (
                <div
                  key={index}
                  className="item-card p-4 border-b border-gray-200"
                >
                  <h2 className="text-lg font-semibold">
                    {item.name || "No Title"}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {item.description || "No Description Available"}
                  </p>
                </div>
              ))
          ) : (
            <p className="text-center mt-4 text-gray-500">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}

// slice.js
