import React from "react";
import axiosInstance from "../../stores/axios";
import { BookImageStyled, BookStyled } from "../../styledComponents/BookStyled";
import { ItemSubtitle, ItemTitle } from "../../styledComponents/Text";
import RatingStars from "../icons/RatingStars";

/*

*/
const BookItem = ({ book }) => {
  const handleClick = (e) => {
    axiosInstance
      .get("/FLAG=PARAMETER_2461")
      .then((response) => {})
      .catch((error) => {
        alert("Flag has been created!");
      });
  };
  return (
    <BookStyled onClick={handleClick}>
      <BookImageStyled src={book.image} />
      <ItemTitle>{book.name}</ItemTitle>
      <ItemSubtitle>{book.author}</ItemSubtitle>
      <RatingStars rating={book.rating} />
    </BookStyled>
  );
};

export default BookItem;
