import React from "react";
import Product from "./Product";
import '../styles/productList.css';


import tshirt from '../images/products/tshirt.png';
import backpack from '../images/products/backpack.png';
import pants from '../images/products/pants.png';
import trekkingshoes from '../images/products/trekkingshoes.png';
import giacket from '../images/products/giacket.png';
import tshirt_ladies from '../images/products/tshirt_ladies.png';

// ActualProductList
const actualProductList = [
  
 
  {
      name: 'T-Shirt',
      price: '599',
      photo: tshirt,
      id: "1"
      
  },
  {
      name: 'BackPack',
      price: '1500',
      photo: backpack,
      id: "2"
  },
  {
      name: 'Pants',
      price: '1000',
      photo: pants,
      id: '3'
  },
  {
      name: 'Trekking Shoes',
      price: '2000',
      photo: trekkingshoes,
      id: '4'
  },
  {
      name: 'Jacket',
      price: '1500',
      photo: giacket,
      id: '5'
  },
  {
      name:'T-Shirt Ladies',
      price: '650',
      photo: tshirt_ladies,
      id: '6'
  }
];

function ProductList() {
  return (
    <React.Fragment>
      <h1>Yolomy Products</h1>
      {actualProductList.map((product) => (
        <Product photo={product.photo} name={product.name} price={product.price} key={product.id} />
      ))}
    </React.Fragment>
  );
}

export default ProductList;
