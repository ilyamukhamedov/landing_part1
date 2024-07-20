import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Fragment.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import page1 from "../../images/page_1.jpg";
import page2 from "../../images/page_2.jpg";
import page3 from "../../images/page_3.jpg";

const Fragments = ({ handleOpen }) => {
  return (
    <div className="fragment" id="fragments">
      <div className="fragment__container">
        <h1 className="fragment__title">ФРАГМЕНТЫ</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 2,
            stretch: 400,
            depth: 50,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="fragment__swiper"
        >
          <SwiperSlide>
            <img
              className="fragment__image"
              src={page1}
              alt="image of the book"
              onClick={() => handleOpen(page1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="fragment__image"
              src={page2}
              alt="image of the book"
              onClick={() => handleOpen(page2)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="fragment__image"
              src={page3}
              alt="image of the book"
              onClick={() => handleOpen(page3)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Fragments;
