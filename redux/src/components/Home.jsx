import { useState, useEffect } from "react";
import {add} from '/redux/cartSlice.jsx'
import { useDispatch } from "react-redux";


const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);


  const handleAdd = (item) => {
    dispatch(add(item))
  }

  return (
    <div className="productWrapper">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
          <button className="btn" onClick={() => handleAdd(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
