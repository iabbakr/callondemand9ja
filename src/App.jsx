// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import CartPage from './components/CartPage';
import UserPage from './components/UserPage';

const App = () => {
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    // Update item quantity
    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Menu foodItems={foodItems} addToCart={addToCart} />} />
                <Route
                    path="/cart"
                    element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
                />
                <Route path="/user" element={<UserPage cart={cart} />} />
            </Routes>
            <Footer />
        </Router>
    );
};

// Sample food items
const foodItems = [
    { id: 1, name: 'Jollof Rice', price: 1800, image: 'https://example.com/jollof.jpg' },
    { id: 2, name: 'White Rice', price: 1600, image: 'https://example.com/white_rice.jpg' },
    { id: 3, name: 'Fried Rice', price: 1800, image: 'https://example.com/fried_rice.jpg' },
    // Add other food items
];

export default App;
