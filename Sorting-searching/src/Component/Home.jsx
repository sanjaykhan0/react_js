import React, { useState } from "react";
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("")
  
  let arr = [
    {
      name: "realme NARZO N61 (Marble Black,6GB RAM+128GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency | Charger in The Box",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹8,498",
      img: "https://m.media-amazon.com/images/I/71EN6N9kUEL._AC_UY218_.jpg",
      category:"mobile"
    },
    {
      name: "Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Silver",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹1,04,998",
      img: "https://m.media-amazon.com/images/I/71WkDp--uqL._AC_UY218_.jpg",
      category:"laptop"
      
    },
    {
      name: "realme NARZO 70x 5G (Forest Green, 8GB RAM,128GB Storage) | 120Hz Ultra Smooth Display | Dimensity 6100+ 6nm 5G | 50MP AI Camera | 45W Charger in The Box",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹14,998",
      img: "https://m.media-amazon.com/images/I/71MI4QbQIvL._AC_UY218_.jpg",
      category:"mobile"
      
    },
    {
      name: "OnePlus 12R (Iron Gray, 16GB RAM, 256GB Storage)",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹49,998",
      img: "https://m.media-amazon.com/images/I/71c3EH8FoWL.jpg",
      category:"mobile"
      
    },
    {
      name: "Ben Martin Men's Slim Fit Jeans BMWJJ-3-DBNL",
      star: "",
      month: "1K+ bought in past month",
      offers: "No featured offers available",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61o+t4TgzSS._AC_UL320_.jpg",
      category:"fashion"
      
    },
    {
      name: "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹98,998",
      img: "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg",
      category:"mobile"

    },
    // laptop
    {
      name: "HP 15s Core i5 12th Gen (16GB RAM/512GB SSD/FHD/MS Office 21 /Backlit Keyboard /15.6-inch (39.6 cm)/FHD/Windows 11/Silver/1.69 kg) fy5009TU Laptop",
      star: "",
      month: "3K+ bought in past month",
      offers: "No featured offers available",
      price: "₹52,998",
      img: "https://m.media-amazon.com/images/I/61mwCxPRejL._AC_UL320_.jpg",
      category:"laptop"
      
    },
    {
      name: "Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB SSD/Win11 Home/38 WHR/HD Webcam) A325-45 with 39.63 cm (15.6) HD Display, Pure Silver, 1.5 KG",
      star: "",
      month: "1K+ bought in past month",
      offers: "No featured offers available",
      price: "₹20,990",
      img: "https://m.media-amazon.com/images/I/41te6o+zQ7L._AC_.jpg",
      category:"laptop"
      
    },
    {
      name: "Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/1TB SSD/Windows 11 Home/Wi-Fi 6),15.6(39.6cms) FHD ANV15-51",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹78,998",
      img: "https://m.media-amazon.com/images/I/51GGNToj7aL._AC_UY218_.jpg",
      category:"laptop"
      
    },
    {
      name: "U.S. POLO ASSN. Men's Regular Fit Shirt",
      star: "",
      month: "1K+ bought in past month",
      offers: "No featured offers available",
      price: "₹1,739",
      img: "https://m.media-amazon.com/images/I/81dn8x5ISjL._AC_UL320_.jpg",
      category:"fashion"
      
    },
    {
      name: "HP 15s Core i5 12th Gen (16GB RAM/512GB SSD/FHD/MS Office 21 /Backlit Keyboard /15.6-inch (39.6 cm)/FHD/Windows 11/Silver/1.69 kg) fy5009TU Laptop",
      star: "",
      month: "3K+ bought in past month",
      offers: "No featured offers available",
      price: "₹52,998",
      img: "https://m.media-amazon.com/images/I/61mwCxPRejL._AC_UL320_.jpg",
      category:"laptop"
      
    },
    {
      name: "Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB SSD/Win11 Home/38 WHR/HD Webcam) A325-45 with 39.63 cm (15.6) HD Display, Pure Silver, 1.5 KG",
      star: "",
      month: "1K+ bought in past month",
      offers: "No featured offers available",
      price: "₹20,990",
      img: "https://m.media-amazon.com/images/I/41te6o+zQ7L._AC_.jpg",
      category:"laptop"
      
    },
    
    // fashion
    
    {
      name: "Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/1TB SSD/Windows 11 Home/Wi-Fi 6),15.6(39.6cms) FHD ANV15-51",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹78,998",
      img: "https://m.media-amazon.com/images/I/51GGNToj7aL._AC_UY218_.jpg",
      category:"laptop"

    },
    {
      name: "VIMAL JONNEY Regular Fit Multicolor Mens Tshirts(Pack of 2-VIMAL632183)",
      star: "",
      month: "1K+ bought in past month",
      offers: "No featured offers available",
      price: "₹359",
      img: "https://m.media-amazon.com/images/I/81q11JIaNWL._AC_UL320_.jpg",
      category:"fashion"
      
    },
    {
      name: "Van Heusen Men's Slim Fit Solid Casual Shirt",
      star: "",
      month: "1K+ bought in past month",
      offers: "No featured offers available",
      price: "₹899",
      img: "https://m.media-amazon.com/images/I/51XndcMkrNL._AC_UL320_.jpg",
      category:"fashion"
      
    },
    {
      name: "Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Silver",
      star: "",
      month: "5K+ bought in past month",
      offers: "No featured offers available",
      price: "₹1,04,998",
      img: "https://m.media-amazon.com/images/I/71WkDp--uqL._AC_UY218_.jpg",
      category:"laptop"
    
    },
  ];
  
  let data = arr.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) && (category ? e.category.toLowerCase() === category.toLowerCase() : true)
);

  return (
    <div>
      <br />
      <Link to={"/Change"}>layout</Link>
      <br />
      <center>
                <h1 className="product-title">Product Page</h1>
                <br />
                <select className="category-select" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="fashion">Fashion</option>
                </select>
            </center> <br /><br />
       <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <br />
      <br />
      {data && data.map((e,i) => {
  return (
    <div key={i} className="product">
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
  );
})}

    </div>
  );
}
