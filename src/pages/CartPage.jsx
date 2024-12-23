import React, { useState } from 'react';

const CartPage = () => {
    const [cart, setCart] = useState([
        { id: 1, name: "Spaghetti", price: 1500, quantity: 2 },
        { id: 2, name: "Beans", price: 1000, quantity: 1 },
    ]);

    // Update Quantity
    const updateQuantity = (id, quantity) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        setCart(updatedCart);
    };

    // Remove Item
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    // Calculate Total
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
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name}</p>
                            <p>N{item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            />
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: N{calculateTotal()}</h3>
                    <button className="checkout-btn">Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
