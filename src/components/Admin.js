import React, { useContext, useState } from "react";
import  { DataContext } from "../DataContext";
import Members from "./Members";

export default function Admin() {
  const { products, addToStock, removeFromStock, stockError, setStockError } = useContext(DataContext);

  const [newBrand, setNewBrand] = useState(null);
  const [newModel, setNewModel] = useState(null);
  const [newPrice, setNewPrice] = useState(null);

  const validBrand = (e) => {
    setNewBrand(e.target.value);
    setStockError(null)
  };
  const validModel = (e) => {
    setNewModel(e.target.value);
    setStockError(null)
  };
  const validPrice = (e) => {
    setNewPrice(e.target.value);
    setStockError(null)
  };

  return (
    <div>
      <h3>Stock</h3>
      <div className="admin">
        <div className="stock">
          <table>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Price</th>
            </tr>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{`${product.brand}`}</td>
                <td>{`${product.model}`}</td>
                <td>{`$${product.price}`}</td>
                <td>
                  <button
                    onClick={() => {
                      removeFromStock(product);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="stock">
          <label>Product Brand:</label>
          <input onChange={validBrand} />
          <br/>
          {stockError && <label className="error">{stockError}</label>}
          <br />
          <label>Product Model:</label>
          <input onChange={validModel} />
          <br/>
          {stockError && <label className="error">{stockError}</label>}
          <br />
          <label>Product Price:</label>
          <input type="number" onChange={validPrice} />
          <br/>
          {stockError && <label className="error">{stockError}</label>}
          <br />
          <button
            onClick={() => {
              addToStock(newBrand, newModel, newPrice);
            }}
          >
            Add to Stock
          </button>
        </div>
      </div>
      <h3>Members of Branded</h3>
      <div className="admin">
        <Members />
      </div>
    </div>
  );
}
