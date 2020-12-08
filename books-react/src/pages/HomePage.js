import { observer } from "mobx-react";
import React from "react";
import BookList from "../components/book/BookList";
import Hero from "../components/Hero";
import booksStore from "../stores/booksStore";
const HomePage = () => {
  //   booksStore.fetchBooks();

  console.log("Fetched Books: ", booksStore.books);
  return (
    <div>
      <Hero />
      <BookList title={"Popular Now!"} books={booksStore.books} />
    </div>
  );
};

export default observer(HomePage);
