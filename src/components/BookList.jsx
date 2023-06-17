import React, { useState } from 'react'
import { useBook } from '../context/BookContext';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
const BookList = () => {
    const {bookList} = useBook();
    const [searchTerm, setSearchTerm] = useState("");
    const searchedBooks = bookList.filter(({author, name}) => {
        return author.toLowerCase().includes(searchTerm) || name.toLowerCase().includes(searchTerm);
    });

    return (
        <div>
            <div className='search-nav'>
                <Link to="/">
                <svg viewBox="0 0 1024 1024" width="2rem" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                </Link>
                <h4>
                Search : <input type="text" name="search" id="search" value={searchTerm} placeholder='search books'
                onChange={(e) => setSearchTerm(e.target.value)}/>
            </h4>
            </div>
            <div className="container">
                {
                    ((searchTerm.length > 0) && searchedBooks.length > 0) ? (
                        searchedBooks?.map((book) => {
                            return <BookCard key={book.id} book={book}/>
                        })
                    ) : (
                        searchTerm.length === 0 ? (<h3>Type to search book</h3>) : (
                            <>
                                <h3>Searched books not found</h3>
                            </>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default BookList