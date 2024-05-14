import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/cart" element={<Cart />}>Home</Route>
      </Routes>
    </div>
  );
};

export default App;
