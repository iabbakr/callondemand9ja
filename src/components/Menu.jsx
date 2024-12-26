// Menu.js
import React, { useState } from 'react';
import FoodItem from './FoodItem';

const Menu = () => {
  const [cart, setCart] = useState([]);
  const foodItems = [
    { id: 1, name: "Jollof Rice", price: 1800, image: "https://image-link" },
    { id: 2, name: "White Rice", price: 1600, image: "https://image-link" },
    { id: 3, name: "Fried Rice", price: 1800, image: "https://image-link" },
    { id: 4, name: "Semo", price: 1200, image: "https://image-link" },
    { id: 5, name: "Beans", price: 1000, image: "https://image-link" },
    { id: 6, name: "Spaghetti", price: 1500, image: "https://image-link" },
    { id: 7, name: "Pounded Yam", price: 1400, image: "https://image-link" },
    { id: 8, name: "Amala", price: 1200, image: "https://image-link" }
  ];

  const addToCart = (item) => {
    const newCart = [...cart];
    const existingItem = newCart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item exists in cart, increase quantity
      existingItem.quantity += 1;
    } else {
      // Otherwise, add new item
      newCart.push({ ...item, quantity: 1 });
    }

    setCart(newCart);
  };

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="food-items">
        {foodItems.map(item => (
          <FoodItem
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            addToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
