import React, { useRef, useState, useEffect } from "react";
import "./Reviews1.css";
import { reviewsData } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviews = () => {
  const swiper = new Swiper(".card__content", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return (
    <section className="container">
      <div className="card__container swiper">
        <div className="card__content">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
