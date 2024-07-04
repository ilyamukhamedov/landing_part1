import React, { useRef, useState, useEffect } from "react";
import "./Reviews1.css";
import { reviewsData } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

const Reviews = () => {
  return (
    <section className="container">
      <div className="card__container swiper">
        <div className="card__content">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
            loop={true}
            grabCursor={true}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-wrapper"
          >
            {reviewsData.map((review) => (
              <SwiperSlide
                className="card__article swiper-slide"
                key={review.id}
              >
                <div className="card__data">
                  <h2 className="card__name">{review.name}</h2>

                  <span className="card__position">{review.position}</span>

                  <p className="card__description">{review.description}</p>
                </div>
              </SwiperSlide>
            ))}
            ;
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
