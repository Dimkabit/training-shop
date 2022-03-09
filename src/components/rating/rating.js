import React, {  } from "react";

import "./rating.scss";



const StarRating = ({ rating }) => {
  let starLength = 5;
  return (
    <>
      <div className="womens-cart__stars-block">
        {[...Array(rating)].map((star, i) => {
          return (
            <span
              key={i}
              className="star on"
            > &#9733;</span>
          );
        })}
        { rating > 0 ?
        [...Array(starLength - rating )].map((star, i) => {
          return (
            <span
              key={i}
              className="star off"
            > &#9733; </span>
          );
        }) : null
        }
      </div>
    </>
  );;
};

export {StarRating};