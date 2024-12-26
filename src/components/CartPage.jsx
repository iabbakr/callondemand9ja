// CartPage.js
import React from 'react';
import Cart from './Cart';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                    <h3>Total: N{calculateTotal()}</h3>
                    <button className="checkout-btn">Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
