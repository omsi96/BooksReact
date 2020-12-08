import React from "react";
import HorizontalList, {
  HorizontalWrapper,
} from "../../styledComponents/HorizontalList";
import { Title, ItemSubtitle } from "../../styledComponents/Text";
import BookItem from "./BookItem";

const BookList = ({ title = "", books = [], booksToPresent = 5 }) => {
  return (
    <div style={{ margin: "20px" }}>
      <HorizontalWrapper>
        <Title> {title} </Title>
        <ItemSubtitle style={{ textAlign: "right", display: "inlineBlock" }}>
          View all
        </ItemSubtitle>
      </HorizontalWrapper>
      <HorizontalList>
        {books.slice(0, booksToPresent).map((book) => (
          <BookItem book={book} />
        ))}
      </HorizontalList>
    </div>
  );
};

export default BookList;
