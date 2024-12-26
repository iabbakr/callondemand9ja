// Menu.js
import React from 'react';
import FoodItem from './FoodItem';

const Menu = ({ foodItems, addToCart }) => {
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
                        addToCart={() => addToCart(item)} // pass addToCart function
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
