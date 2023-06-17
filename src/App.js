import "./styles.css";
import { Route, Routes } from 'react-router-dom';
import BookList from "./components/BookList";
import Home from "./components/Home";
export default function App() {
  return (
  <div className="App">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<BookList/>}/>
    </Routes>
  </div>
);
}
