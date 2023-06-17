import { createContext, useContext, useState } from "react";
import { books } from "../data/books";
const BookContext = createContext({
  bookList: [],
  toggleBookToShelves: () => {}
});

export const BookProvider = ({ children }) => {

  const [bookList, setBookList] = useState(books);

  const toggleBookToShelves = (payload) => {
    const {payload: {bookId, shelf}} = payload;
    let books = bookList.map((book) => {
      if(book.id === bookId) {
        return {...book, shelf};
      }
      return book;
    });
    setBookList(books);
  };

  return (
    <BookContext.Provider
      value={{
        bookList,
        toggleBookToShelves
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
