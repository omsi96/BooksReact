import React from "react";
import StarRatingBarStyled from "../../styledComponents/icons/StarRatingBarStyled";
import Star from "./Star";

const RatingStars = ({ rating }) => {
  const filledArray = new Array(5)
    .fill(false)
    .map((value, index) => index + 1 <= rating);
  console.log(filledArray);
  return (
    <div>
      <StarRatingBarStyled>
        {filledArray.map((filled) => (
          <Star filled={filled} />
        ))}
      </StarRatingBarStyled>
    </div>
  );
};

export default RatingStars;
