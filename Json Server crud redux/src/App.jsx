import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { fetchProducts, selectProducts, selectLoading, selectError } from "./App/Slice";
// import { fetchProducts, selectProducts, selectLoading, selectError } from "./productsSlice"; // Import Redux logic

export default function App() {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch data via Redux
  }, [dispatch]);

  const handleSlideChange = (swiper) => setCurrentSlide(swiper.activeIndex);

  const handlePageChange = (value) => {
    setCurrentSlide(value - 1);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(value - 1);
    }
  };

  const addToCart = async (product) => {
    try {
      const updatedProduct = { ...product, quantityAvailable: product.quantityAvailable - 1 };
      await axios.put(`http://localhost:5000/products/${product.id}`, updatedProduct);

      const userProduct = { ...product, AddedQuantity: 1 };
      await axios.post("http://localhost:5000/userItem", userProduct);

      dispatch(fetchProducts()); // Refresh Redux state
      alert(`${product.title} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  const cancelItem = async (product) => {
    try {
      const updatedProduct = { ...product, quantityAvailable: product.quantityAvailable + 1 };
      await axios.put(`http://localhost:5000/products/${product.id}`, updatedProduct);

      await axios.delete(`http://localhost:5000/userItem/${product.id}`);
      dispatch(fetchProducts()); // Refresh Redux state
      alert(`${product.title} removed from cart!`);
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "30px" }}>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, SwiperPagination]}
        style={{ height: "fit-content", width: 520, padding: 0 }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div style={{ border: "1px solid #ccc", borderRadius: "10px",margin:"5px", padding: "50px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
              <img src={product.image} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "10px" }}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Available: {product.quantityAvailable}</p>
                <div>Rating: {product.rating} ★</div>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: product.quantityAvailable > 0 ? "#007bff" : "#ccc",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: product.quantityAvailable > 0 ? "pointer" : "not-allowed",
                  }}
                  disabled={product.quantityAvailable <= 0}
                >
                  {product.quantityAvailable > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {Array.from({ length: products.length }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            style={{
              padding: "5px 10px",
              margin: "5px",
              backgroundColor: idx === currentSlide ? "#007bff" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Shopping Cart</h3>
        {products.filter((p) => p.AddedQuantity > 0).length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          products.filter((p) => p.AddedQuantity > 0).map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc", padding: "10px 0" }}>
              <span>{item.title} (x{item.AddedQuantity})</span>
              <span>${item.price * item.AddedQuantity}</span>
              <button
                onClick={() => cancelItem(item)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Remove One
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
