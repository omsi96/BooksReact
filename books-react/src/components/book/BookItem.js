import React from "react";
import { BookImageStyled, BookStyled } from "../../styledComponents/BookStyled";
import { ItemSubtitle, ItemTitle } from "../../styledComponents/Text";
import RatingStars from "../icons/RatingStars";

/*

*/
const BookItem = ({ book }) => {
  return (
    <BookStyled>
      <BookImageStyled src={book.image} />
      <ItemTitle>{book.name}</ItemTitle>
      <ItemSubtitle>{book.author}</ItemSubtitle>
      <RatingStars rating={book.rating} />
    </BookStyled>
  );
};

export default BookItem;
