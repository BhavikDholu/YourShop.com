import React from 'react';
import {Image} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src='https://images-static.nykaa.com/uploads/a5705559-40fd-4578-8bd9-52243fa34890.jpg?tr=w-600,cm-pad_resize' w='95%' h={{sm:'40vh',md:'50vh',lg:'75vh'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://images-static.nykaa.com/uploads/3d9116a6-b147-40b2-bbdd-afe5e2ea9954.jpg?tr=w-600,cm-pad_resize' w='95%'  h={{sm:'40vh',md:'50vh',lg:'75vh'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://images-static.nykaa.com/uploads/7007dd62-5ef9-4276-9a00-024fbc7c2e18.jpg?tr=w-600,cm-pad_resize' w='95%'  h={{sm:'40vh',md:'50vh',lg:'75vh'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://images-static.nykaa.com/uploads/456c62b2-42cf-488b-a622-e6db5fbcd8af.jpg?tr=w-600,cm-pad_resize' w='95%'  h={{sm:'40vh',md:'50vh',lg:'75vh'}}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel