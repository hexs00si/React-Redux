import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const items = useSelector((state) => state.cart)
  
  
  
  
    return (
    <div className="nav">
      <span>Redux Tutorial</span>
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
      <span>Items: {items.length}</span>
    </div>
  );
};

export default Navbar;
