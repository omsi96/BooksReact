import { observer } from "mobx-react";
import React from "react";
import BookList from "../components/book/BookList";
import Footer from "../components/Footer";
import booksStore from "../stores/booksStore";
const HomePage = () => {
  //   booksStore.fetchBooks();

  console.log("Fetched Books: ", booksStore.books);
  return (
    <div>
      {/* <Hero /> */}
      <BookList title={"Popular Now!"} books={booksStore.books} />
      <Footer />
    </div>
  );
};

export default observer(HomePage);
