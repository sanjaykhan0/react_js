import React, { useEffect, useState, useRef } from 'react';
import { Container, Card, CardContent, Typography, CardMedia, Button, Box, Pagination as MUIButtonPagination } from '@mui/material';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateProduct } from './Slice'; // Corrected import path
import { fetchUserItems, addUserItem, updateUserItem, deleteUserItem } from './Slice2'; // Corrected import path
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function App() {
  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.products.data);
  const userItem = useSelector((state) => state.userItem.data);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => setCurrentSlide(swiper.activeIndex);

  const handlePageChange = (event, value) => {
    setCurrentSlide(value - 1);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(value - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUserItems());
  }, [dispatch]);

  const addToCart = async (product) => {
    const updatedProduct = { ...product, quantityAvailable: product.quantityAvailable - 1 };
    dispatch(updateProduct(updatedProduct));

    let userProduct = userItem.find((el) => el.id === product.id);
    if (userProduct) {
      userProduct.AddedQuantity = userProduct.AddedQuantity + 1;
      dispatch(updateUserItem(userProduct));
    } else {
      userProduct = { ...product, AddedQuantity: 1 };
      dispatch(addUserItem(userProduct));
    }
    alert(`${product.title} added to cart!`);
  };

  const cancelItem = async (product) => {
    const updatedProduct = { ...product, quantityAvailable: product.quantityAvailable + 1 };
    dispatch(updateProduct(updatedProduct));

    let userProduct = userItem.find((el) => el.id === product.id);
    if (userProduct && userProduct.AddedQuantity > 1) {
      userProduct.AddedQuantity = userProduct.AddedQuantity - 1;
      dispatch(updateUserItem(userProduct));
    } else {
      dispatch(deleteUserItem(product.id));
    }
    alert(`${product.title} removed from cart!`);
  };

  return (
    <Container>
      {/* Your Swiper and Product Display */}
      {/* The rest of your component remains the same */}
    </Container>
  );
}
