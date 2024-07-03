import React, { useRef, useState, useEffect } from "react";
import "./Reviews1.css";
import { reviewsData } from "../../utils/constants";
import Swiper from "swiper";
import "swiper/css";

const Reviews = () => {
  return (
    <section className="container">
      <div className="card__container">
        <div className="card__content">
          <div>
            {reviewsData.map((review) => (
              <article className="card__article" key={review.id}>
                <div className="card__data">
                  <h2 className="card__name">{review.name}</h2>

                  <span className="card__position">{review.position}</span>

                  <p className="card__description">{review.description}</p>
                </div>
              </article>
            ))}
            ;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
