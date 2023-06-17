import React from 'react'
import { useBook } from '../context/BookContext';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
const Home = () => {

    const {bookList} = useBook();

    const currentlyReadingBooks = bookList?.filter(({shelf}) => shelf === 'Currently_Reading');

    const wannaReadBooks = bookList?.filter(({shelf}) => shelf === 'Want_To_Read');

    const readBooks = bookList?.filter(({shelf}) => shelf === 'Read');

  return (
    <div>
        <Link to="/search">Search books</Link>
        <section>
            <h1>
                Currently reading
            </h1>
            <div className="container">
                {
                    (currentlyReadingBooks.length > 0) ? (
                        currentlyReadingBooks?.map((book) => {
                            return <BookCard key={book.id} book={book}/>
                        })
                    ) : (
                        <>
                            <h3>
                                No Books in this Shelf
                            </h3>

                        </>
                    )
                }
            </div>
        </section>

        <section>
            <h1>
                Want to read
            </h1>
            <div className="container">
                {
                    (wannaReadBooks.length > 0) ? (
                        wannaReadBooks?.map((book) => {
                            return <BookCard key={book.id} book={book}/>
                        })
                    ) : (
                        <>
                            <h3>
                                No Books in this Shelf
                            </h3>

                        </>
                    )
                }
            </div>
        </section>
        <section>
            <h1>
                Read
            </h1>
            <div className="container">
                {
                    (readBooks.length > 0) ? (
                        readBooks?.map((book) => {
                            return <BookCard key={book.id} book={book}/>
                        })
                    ) : (
                        <>
                            <h3>
                                No Books in this Shelf
                            </h3>

                        </>
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default Home