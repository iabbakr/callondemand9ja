import React from 'react';

const FoodItem = ({ name, price, image, addToCart }) => {
    return (
        <div className="food-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>N{price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default FoodItem;
