import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../Features/CartSlice";
import { closeModal } from "../Features/Modalslice";

function Modal() {
  const dispatch = useDispatch();
  return (
    <section className="Modal">
      <div className="Modal__container">
        <p className="Modal__text">Do you want to clear your Cart ?</p>
        <div className="Modal--buttons">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            className="Modal__btn confirm-btn "
          >
            confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="Modal__btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default Modal;
