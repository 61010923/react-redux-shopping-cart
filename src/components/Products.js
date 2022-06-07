import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const cart = useSelector((state) => state);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error: ", err);
      });
    setData(response.data);
  };
  console.log(cart);
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.title}
          <img src={item.image} alt={item.title} style={{ width: "100px" }} />
          <button type="submit" onClick={() => dispatch({ type: "ADD", payload: { ...item, quantity: 1 } })}>add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
