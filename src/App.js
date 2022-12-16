import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { totals } from "./Features/CartSlice";

function App() {
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(totals());
  }, [cart]);

  if (loading) {
    return (
      <div className="Loading">
        <p className="Loading__text">Loading....</p>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
