import React, { useState } from "react";
import "./Home.css"

export default function Home() {
  const [search, setSearch] = useState("");

  let arr = [
    {
      name: "realme NARZO N61 (Marble Black,6GB RAM+128GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency | Charger in The Box",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹8,498",
      img: "https://m.media-amazon.com/images/I/71EN6N9kUEL._AC_UY218_.jpg",
    },
    {
      name: "realme NARZO 70x 5G (Forest Green, 8GB RAM,128GB Storage) | 120Hz Ultra Smooth Display | Dimensity 6100+ 6nm 5G | 50MP AI Camera | 45W Charger in The Box",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹14,998",
      img: "https://m.media-amazon.com/images/I/71MI4QbQIvL._AC_UY218_.jpg",
    },
    {
      name: "OnePlus 12R (Iron Gray, 16GB RAM, 256GB Storage)",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹49,998",
      img: "https://m.media-amazon.com/images/I/71c3EH8FoWL.jpg",
    },
    {
      name: "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹98,998",
      img: "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg",
    },
  ];

  let data = arr.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
       <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <br />
      <br />
      {data && data.map((e) => {
  return (
    // <div
    //   key={e.id} 
    //   style={{ border: "1px solid", height: "100vh", width: "82%" }}
    // >
    <div className="product">
    <div className="image">
      <img src={e.img} alt={e.name} />
    </div>
    <div className="details">
      <h3>{e.name}</h3>
      <font className="month">{e.month}</font><br />
      <button className="option-btn">See option</button><br />
      <font className="offers">{e.offers}</font><br />
      <font className="price">{e.price}</font>
    </div>
  </div>
  
    // </div>
  );
})}

    </div>
  );
}
