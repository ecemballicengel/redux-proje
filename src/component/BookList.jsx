import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../redux/bookSlice";
import { addToCart } from "../redux/cartSlice";

function BookList() {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=10")
      .then((res) => dispatch(setBooks(res.data)));
  }, [dispatch]);

  const handleAddToCart = (book) => {
    const quantity = quantities[book.id] || 1;
    dispatch(addToCart({ ...book, quantity: Number(quantity) }));
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {books.map((book) => (
            <div className="col-lg-3 col-md-4 col-sm-12 my-3" key={book.id}>
              <div className="card m-auto rounded shadow">
                <img
                  className="card-img-top"
                  src={book.image_url}
                  height={300}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{book.title}</h5>
                  <p className="card-text">Yazar: {book.authors}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(book)}
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookList;
