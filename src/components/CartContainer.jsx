import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./Context";

function CartContainer() {
  const { cart, total, clearCart } = useGlobalContext();

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
          <div className="total">Total</div>$ {total}
        </div>
        <button onClick={clearCart} className="btn clear-btn">
          Clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
