import React from 'react'
import { useBook } from '../context/BookContext';
import BookCard from './BookCard';
const Home = () => {

    const {bookList} = useBook();

    const currentlyReadingBooks = bookList?.filter(({shelf}) => shelf === 'Currently_Reading');

    const wannaReadBooks = bookList?.filter(({shelf}) => shelf === 'Want_To_Read');

    const readBooks = bookList?.filter(({shelf}) => shelf === 'Read');

  return (
    <div>
        <section>
            <h1>
                Currently reading
            </h1>
            <hr />
            {
                (currentlyReadingBooks.length > 0) ? (
                    currentlyReadingBooks?.map((book) => {
                        return <BookCard key={book.id} book={book}/>
                    })
                ) : (
                    <>
                        <p>Not reading any book</p>
                        <Link to="/books"> Choose some book to read</Link>
                    </>
                )
            }
        </section>

        <section>
            <h1>
                Want to read
            </h1>
            <hr />
            {
                (wannaReadBooks.length > 0) ? (
                    wannaReadBooks?.map((book) => {
                        return <BookCard key={book.id} book={book}/>
                    })
                ) : (
                    <>
                        <p>Not reading any book</p>
                        <Link to="/books"> Choose some book to read</Link>
                    </>
                )
            }
        </section>
        <section>
            <h1>
                Read
            </h1>
            <hr />
            {
                (readBooks.length > 0) ? (
                    readBooks?.map((book) => {
                        return <BookCard key={book.id} book={book}/>
                    })
                ) : (
                    <>
                        <p>Not reading any book</p>
                        <Link to="/books"> Choose some book to read</Link>
                    </>
                )
            }
        </section>
    </div>
  )
}

export default Home