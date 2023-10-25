import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import BookList from "./component/BookList";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />}></Route>
        <Route path="/booklist" element={<BookList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
