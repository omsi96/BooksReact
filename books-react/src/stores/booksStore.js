import { makeAutoObservable } from "mobx";
import axios from "./axios";
class BookStore {
  constructor() {
    makeAutoObservable(this);
  }
  books = [];

  createBook = async (book) => {
    try {
      await axios.post("books/create", book);
    } catch (error) {
      return error;
    }
  };
  fetchBooks = async () => {
    try {
      const books = await axios.get("books/");
      this.books = books.data;
      console.log("Got all books:", this.books);
    } catch (error) {
      console.log("Got an error:", error);
      return error;
    }
  };
  updateBook = async (bookId) => {};
  deleteBook = async (bookId) => {};
}

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
