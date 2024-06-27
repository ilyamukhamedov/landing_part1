import React, { useRef, useState, useEffect } from "react";
import "./Reviews1.css";
import { reviewsData } from "../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    swipeToSlide: true,
  };

  return (
    <div className="reviews" id="reviews">
      <h1 className="reviews__title">РЕЦЕНЗИИ</h1>
      <div className="reviews__container">
        <Slider {...settings}>
          {reviewsData.map((review) => (
            <ul className="cards" key={review.id}>
              <li className="cards__item">
                <h2 className="cards__title">{review.name}</h2>
                <span className="cards__position">{review.position}</span>
                <p className="cards__description">{review.description}</p>
              </li>
            </ul>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
