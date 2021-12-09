import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import Product from "./Product";
import "../App.css";
import Cart from "./Cart";

export default function Store() {
  const { products } = useContext(DataContext);
  const [sortType, setSortType] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const sortProducts = (e) => {
    setSortType(e.target.value);
    if (sortType === "idOption") {
      filteredProducts.sort((first, second) => {
        return first.id > second.id ? 1 : -1;
      });
      setFilteredProducts(filteredProducts);
    }
    if (sortType === "priceOption") {
      filteredProducts.sort((first, second) => {
        return first.price > second.price ? 1 : -1;
      });
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div className="store">
      <div className="toolBar">
        <select onChange={sortProducts}>
          <option value="idOption">Recommended</option>
          <option value="priceOption">Price: Low to High</option>
        </select>
      </div>
      <div className="mainStore">
        <div className="products">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </div>
  );
}
