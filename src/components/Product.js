import React, { useContext } from "react";
import "../App.css";
import { DataContext } from "../DataContext";

export default function Product(props) {
  const { product } = props;
  const { addToCart } = useContext(DataContext);

  return (
    <div>
      <div className="main">
        <div key={product.id} className="product">
          {`${product.brand}  
                ${product.model}`} <br/>
          <img className="smallImg" src={product.img} alt={product.model}/>
          <h4 className="price">{product.price}$</h4>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
