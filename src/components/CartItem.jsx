import React from "react";
import { useGlobalContext } from "./Context";

function CartItem({ id, img, price, amount, title }) {
  const { filterRemove, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <p className="cart__title">{title}</p>
        <p className="price">${price}</p>
        <button onClick={() => filterRemove(id)} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default CartItem;
