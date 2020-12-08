import React from "react";
import { FaStar } from "react-icons/fa";
import StarStyled from "../../styledComponents/icons/StarStyled";
const Star = ({ filled }) => {
  return (
    <StarStyled filled={filled}>
      <FaStar />
    </StarStyled>
  );
};

export default Star;
