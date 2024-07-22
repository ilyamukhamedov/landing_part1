import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Fragment.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

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
          speed={600}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 2,
            stretch: 400,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            bulletActiveClass: "swiper-pagination-bullet-active1",
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper__button-next",
            prevEl: ".swiper__button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
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
          <div className="slider__controler">
            <div className="swiper__button swiper__button-prev">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="swiper-pagination swiper__pag">
              <div className="swiper-pagination-bullet swiper-pagination-bullet-active"></div>
            </div>
            <div className="swiper__button swiper__button-next">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Fragments;
