// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>N{item.price}</p>
          <input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)} 
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
