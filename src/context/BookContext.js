import { createContext, useContext, useState } from "react";
import { books } from "../data/books";
const BookContext = createContext({
  bookList: [],
  searchedBooks: [],
  toggleBookToShelves: () => {}
});

export const BookProvider = ({ children }) => {
  const [bookList, setBookList] = useState(books);
  const [searchedBooks, setSearchedBooksList] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");
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

  const searchBooks = () => {
    if(searchTerm) {
      let books = bookList.filter(({author, name}) => {
        return author.includes(searchTerm) || name.includes(searchTerm);
      });
      setSearchedBooksList(books);
    } else {
      setSearchedBooksList(bookList);
    }
  }

  return (
    <BookContext.Provider
      value={{
        bookList,
        toggleBookToShelves,
        searchedBooks,
        searchTerm,
        setSearchTerm,
        searchBooks
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
