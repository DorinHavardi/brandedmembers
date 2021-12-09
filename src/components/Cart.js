import React, { useContext } from "react";
import { DataContext } from "../DataContext";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } =
    useContext(DataContext);

  const itemsPrice = cartItems.reduce(
    (a, currentItem) => a + currentItem.price * currentItem.quantity,
    0
  );
  const shippingPrice = itemsPrice > 74.99 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <div>
      {cartItems.length === 0 && (
        <div className="emptyCart">
          <h4>Your Cart is empty.</h4>
        </div>
      )}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{`${item.brand}
          ${item.model}`}</div>
          <div>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>-</button>
          </div>
          <div>
            {item.quantity} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div className="subtotal">
          <h6>Free Shipping! on Orders Over $74.99</h6>
          <label>Items Price:</label> ${itemsPrice.toFixed(2)}
          <br />
          <label>Shipping Price:</label> ${shippingPrice.toFixed(2)}
          <br />
          <label>
            <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
          </label>
        </div>
      )}
    </div>
  );
}
