// CartPage.js
import React, { useState } from 'react';
import Cart from './Cart';

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Spaghetti", price: 1500, quantity: 2 },
    { id: 2, name: "Beans", price: 1000, quantity: 1 }
  ]);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <Cart 
        cartItems={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
      <h3>Total: N{calculateTotal()}</h3>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartPage;
