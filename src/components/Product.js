import React from "react";

function Product() {
  const price = "500";
  const size = "large";
  return (
    <React.Fragment>
      <h1>Yolomoy Products</h1>
      <p>Trousers - {size}</p>
      <p>Price - {price} </p>
    </React.Fragment>
  );
}

export default Product;
