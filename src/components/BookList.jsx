import React from 'react'
import { useBook } from '../context/BookContext';
import BookCard from './BookCard';
const BookList = () => {
    const {searchedBooks} = useBook();
    return (
        <div>
            {
                (searchedBooks.length > 0) ? (
                    searchedBooks?.map((book) => {
                        return <BookCard key={book.id} book={book}/>
                    })
                ) : (
                    <>
                        <p>Searched books not found</p>
                    </>
                )
            }
        </div>
    )
}

export default BookList