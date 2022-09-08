import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./components/Context";
import Navbar from "./components/Navbar";

function App() {
  const { loading } = useGlobalContext();

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
