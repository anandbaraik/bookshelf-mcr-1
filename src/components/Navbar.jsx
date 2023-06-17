import React from 'react'
import { NavLink } from "react-router-dom";
import { useBook } from '../context/BookContext';
const Navbar = () => {
    const getStyle = ({ isActive }) => {
        return isActive ? "menu menu-active" : "menu";
    };
    const {searchTerm, setSearchTerm, searchBooks} = useBook();
    const handleSearch = (value) => {
        setSearchTerm(value);
        searchBooks();
    }
  return (
    <div>
        <nav>
            <NavLink to="/" className={getStyle}>
                Home
            </NavLink>{" "}
            {"||"}{" "}
            <NavLink to="/Books" className={getStyle}>
                Book List
            </NavLink>{" "}
            {"||"}{" "}
            <input type="text" name="search" id="search" value={searchTerm} placeholder='search books'
                onChange={(e) => handleSearch(e.target.value)}/>
        </nav>
    </div>
  )
}

export default Navbar