import "./styles.css";
import { Route, Routes } from 'react-router-dom';
import BookList from "./components/BookList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
export default function App() {
  return (
  <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList/>}/>
    </Routes>
  </div>
);
}
