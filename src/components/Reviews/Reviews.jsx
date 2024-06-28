import React, { useRef, useState, useEffect } from "react";
import "./Reviews.css";
import { reviewsData } from "../../utils/constants";
import { useSwipeable } from "react-swipeable";

const Reviews = () => {
  const cardsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isScrollLeft, setIsScrollLeft] = useState(0);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!cardsRef.current || hasInitialized.current) return;

    const wrapper = cardsRef.current;
    const width = wrapper.querySelector(".cards").offsetWidth;
    const cardPreview = Math.round(wrapper.offsetWidth / width);

    console.log(wrapper.offsetWidth);

    console.log(width);

    console.log(cardPreview);

    const cards = Array.from(wrapper.children);

    console.log(cards);

    console.log(cards.slice(-cardPreview));

    cards
      .slice(-cardPreview)
      .reverse()
      .forEach((card) => {
        wrapper.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    cards.slice(0, cardPreview).forEach((card) => {
      wrapper.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    console.log(wrapper);

    hasInitialized.current = true;
  }, []);

  useEffect(() => {
    addDraggingClass();
  }, [isDragging]);

  const addDraggingClass = () => {
    const cards = cardsRef.current.querySelectorAll(".cards");
    cards.forEach((card) => {
      if (isDragging) {
        card.classList.add("dragging");
      } else {
        card.classList.remove("dragging");
      }
    });
  };

  const startDrag = (e) => {
    if (!cardsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setIsScrollLeft(cardsRef.current.scrollLeft);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const dragging = (e) => {
    if (!isDragging || !cardsRef.current) return;
    cardsRef.current.scrollLeft = isScrollLeft - (e.pageX - startX);
  };

  const handleArrowClick = (direction) => {
    if (!cardsRef.current) return;

    const width = cardsRef.current.querySelector(".cards__item").offsetWidth;

    cardsRef.current.scrollLeft += direction === "left" ? -width : width;
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleArrowClick("right"),
    onSwipedRight: () => handleArrowClick("left"),
    trackMouse: true,
  });

  const infiniteScroll = () => {
    const wrapper = cardsRef.current;

    console.log(wrapper.scrollLeft);

    console.log(wrapper.scrollWidth - wrapper.offsetWidth);

    if (wrapper.scrollLeft === 0) {
      wrapper.classList.add("scrolling");
      wrapper.scrollLeft = wrapper.scrollWidth - 2 * wrapper.offsetWidth;
      wrapper.classList.remove("scrolling");
    } else if (
      Math.ceil(wrapper.scrollLeft) ===
      wrapper.scrollWidth - wrapper.offsetWidth
    ) {
      wrapper.classList.add("scrolling");
      wrapper.scrollLeft = wrapper.offsetWidth;
      wrapper.classList.remove("scrolling");
    }
  };

  return (
    <div className="reviews" id="reviews">
      <h1 className="reviews__title">РЕЦЕНЗИИ</h1>
      <div className="reviews__container" {...swipeHandlers}>
        <i
          className="fa-solid fa-angle-left"
          onClick={() => handleArrowClick("left")}
        ></i>
        <div
          className="reviews__wrapper"
          ref={cardsRef}
          onMouseDown={startDrag}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
          onMouseMove={dragging}
          onScroll={infiniteScroll}
        >
          {reviewsData.map((review) => (
            <ul className="cards" key={review.id}>
              <li className="cards__item">
                <h2 className="cards__title">{review.name}</h2>
                <span className="cards__position">{review.position}</span>
                <p className="cards__description">{review.description}</p>
              </li>
            </ul>
          ))}
        </div>
        <i
          onClick={() => handleArrowClick("right")}
          className="fa-solid fa-angle-right"
        ></i>
      </div>
    </div>
  );
};

export default Reviews;

// import React, { useRef, useState } from "react";
// import "./Reviews.css";
// import { reviewsData } from "../../utils/constants";
// import { useSwipeable } from "react-swipeable";

// const Reviews = () => {
//   const carouselRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const startDrag = (e) => {
//     if (!carouselRef.current) return;
//     setIsDragging(true);
//     setStartX(e.pageX - carouselRef.current.offsetLeft);
//     setScrollLeft(carouselRef.current.scrollLeft);
//   };

//   const stopDrag = () => {
//     setIsDragging(false);
//   };

//   const dragging = (e) => {
//     if (!isDragging || !carouselRef.current) return;
//     e.preventDefault();
//     const x = e.pageX - carouselRef.current.offsetLeft;
//     const walk = x - startX;
//     carouselRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleArrowClick = (direction) => {
//     if (!carouselRef.current) return;

//     const width = carouselRef.current.querySelector(".cards__item").offsetWidth;

//     carouselRef.current.scrollLeft += direction === "left" ? -width : width;
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => handleArrowClick("right"),
//     onSwipedRight: () => handleArrowClick("left"),
//     trackMouse: true,
//   });

//   return (
//     <div className="reviews" id="reviews">
//       <h1 className="reviews__title">РЕЦЕНЗИИ</h1>
//       <div className="reviews__container" {...swipeHandlers}>
//         <i
//           className="fa-solid fa-angle-left"
//           onClick={() => handleArrowClick("left")}
//         ></i>
//         <div
//           className="reviews__wrapper"
//           ref={carouselRef}
//           onMouseDown={startDrag}
//           onMouseLeave={stopDrag}
//           onMouseUp={stopDrag}
//           onMouseMove={dragging}
//         >
//           {reviewsData.map((review) => (
//             <ul className="cards" key={review.id}>
//               <li className="cards__item">
//                 <h2 className="cards__title">{review.name}</h2>
//                 <span className="cards__position">{review.position}</span>
//                 <p className="cards__description">{review.description}</p>
//               </li>
//             </ul>
//           ))}
//         </div>
//         <i
//           className="fa-solid fa-angle-right"
//           onClick={() => handleArrowClick("right")}
//         ></i>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
