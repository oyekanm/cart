import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { totals, getCartItems } from "./Features/CartSlice";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(totals());
  }, [cart]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (loading) {
    return (
      <div className="Loading">
        <p className="Loading__text">Loading....</p>
      </div>
    );
  }
  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
