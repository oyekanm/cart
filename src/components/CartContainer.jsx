import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
// import { clearCart } from "../Features/CartSlice";

function CartContainer() {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((store) => store.cart);

  if (cart.length === 0) {
    return (
      <section className="container">
        <div>
          <p className="heading">Your Bag </p>
          <p className="empty">is currently empty</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div>
        <p className="heading">Your Bag </p>
      </div>
      <div>
        {cart.map((cart) => {
          return <CartItem key={cart.id} {...cart} />;
        })}
      </div>
      <footer>
        <hr></hr>
        <div className="cart-total">
          <div className="total">Total</div>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={() => dispatch({ type: "CLEAR__CART" })}
          className="btn clear-btn"
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
