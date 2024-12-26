// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import CartPage from './components/CartPage';
import UserPage from './components/UserPage';

const App = () => {
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (item) => {
        setCart([...cart, { ...item, quantity: 1 }]);
    };

    // Update item quantity in the cart
    const updateQuantity = (id, quantity) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        setCart(updatedCart);
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu foodItems={foodItems} addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

const foodItems = [
    { id: 1, name: "Jollof Rice", price: 1800, image: "https://image-link" },
    { id: 2, name: "White Rice", price: 1600, image: "https://image-link" },
    { id: 3, name: "Fried Rice", price: 1800, image: "https://image-link" },
    // ... Add other food items
];

export default App;
