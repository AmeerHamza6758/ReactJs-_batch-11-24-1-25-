import React, { useState } from "react";

const CheckEventTest = () => {
  const [count, setCount] = useState(0);

  //   Add to cart
  const handleAddToCart = () => {
    setCount(100);
    // setCount(count + 1);
  };

  //   Remove from cart
  const handleRemoveFromCart = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter</h1>
      <h2>{count}</h2>
      <div>
        <button
          onClick={handleAddToCart}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to cart
        </button>
        <button
          onClick={handleRemoveFromCart}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Remove To Cart
        </button>
      </div>
    </div>
  );
};

export default CheckEventTest;
