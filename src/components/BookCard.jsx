import { Link } from "react-router-dom";
import { useBook } from "../context/BookContext";

export default function BookCard({book}) {
    const {toggleBookToShelves} = useBook();
    const {author, id, image, name} = book;
    const changeHandler = (e, id) => {
        toggleBookToShelves({payload:{bookId:id, shelf:e.target.value}});
    }

  return (
    <div
      key={id}
      className="card"
    >
      <img
        src={image}
        style={{ width: "100%", height: "160px", objectFit: "contain" }}
        alt={name}
      />
      <h4>{name}</h4>
      <p>{author}</p>
      <select name="bookshelf" id="bookshelf" value={book.shelf} onChange={(e) => changeHandler(e, id)}>
        <option value="None">None</option>
        <option value="Currently_Reading">Currently Reading</option>
        <option value="Want_To_Read">Want To Read</option>
        <option value="Read">Read</option>
      </select>
    </div>
  );
}
