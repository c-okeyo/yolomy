import React from "react";
import Product from "./Product";

// ActualProductList
const actualProductList = [
  {
    name: "T-Shirt",
    price: "599",
    id: "1",
  },
  {
    name: "BackPack",
    price: "1500",
    id: "2",
  },
  {
    name: "Pants",
    price: "1000",
    id: "3",
  },
  {
    name: "Trekking Shoes",
    price: "2000",
    id: "4",
  },
  {
    name: "Jacket",
    price: "1500",
    id: "5",
  },
  {
    name: "T-Shirt Ladies",
    price: "650",
    id: "6",
  },
];

function ProductList() {
  return (
    <React.Fragment>
      <h1>Yolomy Products</h1>
      {actualProductList.map((product) => (
        <Product name={product.name} price={product.price} key={product.id} />
      ))}
    </React.Fragment>
  );
}

export default ProductList;
