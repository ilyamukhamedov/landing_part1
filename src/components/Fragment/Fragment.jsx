import React, { useState } from "react";
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
import mobile1 from "../../images/1.jpg";
import mobile2 from "../../images/2.jpg";
import mobile28 from "../../images/28.jpg";
import mobile29 from "../../images/29.jpg";
import mobile32 from "../../images/32.jpg";
import mobile33 from "../../images/33.jpg";

const Fragments = ({ handleOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const isMobile = windowWidth <= 1150;
  const stretch = isMobile ? 90 : 400;

  return (
    <div className="fragment" id="fragments">
      <div className="fragment__container">
        <h1 className="fragment__title">ФРАГМЕНТЫ</h1>
        <Swiper
          effect={"coverflow"}
          speed={600}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 2,
            stretch: stretch,
            depth: 30,
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
          {!isMobile ? (
            <>
              <SwiperSlide>
                <img
                  className="fragment__image-desktop"
                  src={page1}
                  alt="image of the book"
                  onClick={() => handleOpen(page1)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="fragment__image-desktop"
                  src={page2}
                  alt="image of the book"
                  onClick={() => handleOpen(page2)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="fragment__image-desktop"
                  src={page3}
                  alt="image of the book"
                  onClick={() => handleOpen(page3)}
                />
              </SwiperSlide>
            </>
          ) : null}

          {isMobile ? (
            <>
              <SwiperSlide>
                <img
                  className="fragment__image-mobile"
                  src={mobile1}
                  alt="image of the book"
                  onClick={() => handleOpen(mobile1)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="fragment__image-mobile"
                  src={mobile2}
                  alt="image of the book"
                  onClick={() => handleOpen(mobile2)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="fragment__image-mobile"
                  src={mobile28}
                  alt="image of the book"
                  onClick={() => handleOpen(mobile28)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="fragment__image-mobile"
                  src={mobile29}
                  alt="image of the book"
                  onClick={() => handleOpen(mobile29)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="fragment__image-mobile"
                  src={mobile32}
                  alt="image of the book"
                  onClick={() => handleOpen(mobile32)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="fragment__image-mobile"
                  src={mobile33}
                  alt="image of the book"
                  onClick={() => handleOpen(mobile33)}
                />
              </SwiperSlide>
            </>
          ) : null}

          <div className="slider__controler">
            <div className="swiper__button swiper__button-prev">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="swiper-pagination">
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
