import React, { useRef, useState } from "react";
import ProductCard from "../Components/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import { Box, Flex, Image } from "@chakra-ui/react";
import Rating from "./Rating";

const ProductCarousel = (props) => {
  const { data } = props;
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide key={el.image}>
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              align="center"
              p={2}
            >
              <Image
                src={el.image}
                alt={`Picture of ${el.title}`}
                roundedTop="lg"
              />

              <Box p="3">
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {el.title}
                </Box>
                <Flex justifyContent={"center"} align="center">
                  <Rating rating={el.rating} />
                </Flex>
                <Box as="span" color={"red.600"} fontSize="lg">
                  -{el.discount}
                </Box>
                <Flex justifyContent={"center"} gap="6px" align="end">
                  <Box fontSize="2xl" color={"gray.800"}>
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      ₹
                    </Box>
                    {el.d_price}
                  </Box>
                  <Box
                    as="span"
                    color={"gray.600"}
                    fontSize="lg"
                    textDecoration={"line-through"}
                  >
                    ₹{el.price}
                  </Box>
                </Flex>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
