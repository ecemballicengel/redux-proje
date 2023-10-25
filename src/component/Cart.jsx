import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {cart.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-12 my-3" key={item.id}>
              <div className="card m-auto rounded shadow">
                <img
                  className="card-img-top"
                  src={item.image_url}
                  height={300}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{item.title}</h5>
                  <p className="card-text">Yazar: {item.authors}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Sepeten sil
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

export default Cart;
