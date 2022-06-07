import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const total = data.reduce((sum, currentValue) => sum + currentValue.price * currentValue.quantity, 0);
  return (
    <div>
      total:
      {" "}
      {total}
      {data.map((item) => (
        <div key={item.id}>
          {item.title}
          <img src={item.image} alt={item.title} style={{ width: "100px" }} />
          <h3>
            amount:
            {" "}
            {item.quantity}
          </h3>
          <h3>
            price:
            {" "}
            {item.price}
          </h3>
          <h3>
            total:
            {" "}
            {item.quantity * item.price}
          </h3>
          <button type="submit" onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>
          <button
            type="submit"
            onClick={() => {
              if (item.quantity > 1) {
                dispatch({ type: "DECREASE", payload: item });
              } else {
                dispatch({ type: "REMOVE", payload: item });
              }
            }}
          >
            -

          </button>
          <button type="submit" onClick={() => dispatch({ type: "REMOVE", payload: item })}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
