import React, { useState } from 'react';
import FoodItem from './FoodItem';

const Menu = () => {
    const [cart, setCart] = useState([]);
    const foodItems = [
        { id: 1, name: "Jollof Rice", price: 1800, image: "https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Jollof-Rice-with-Green-Onions-800x530.jpg" },
        { id: 2, name: "White Rice", price: 1600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLc7yaOU7WXfo7BrBqPoVGG2uzp4xcO9pk6wmwzi3qzjvmOcdCJhifacVCAJoy_i0cHnE&usqp=CAU" },
        { id: 3, name: "Fried Rice", price: 1800, image: "https://www.seriouseats.com/thmb/bKUWXJr1uQoJdLZkk9UnJV2Akbs=/300x255/filters:no_upscale():max_bytes(150000):strip_icc()/20220908-nigerian-fried-rice-maureen-celestine-Hero-896bf29d24dc4f349bbaf41c4df042e0.JPG" },
        { id: 4, name: "Semo", price: 1200, image: "https://i.pinimg.com/originals/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg" },
        { id: 5, name: "beans", price: 1000, image: "https://www.chefspencil.com/wp-content/uploads/Ewa-Agoyin.jpg" },
        { id: 6, name: "Spaghetti", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHDp6F68GbTyFtCQlASsvymW8OUV5v_eFjA&s" },
        { id: 7, name: "Pounded yam", price: 1400, image: "https://unorthodoxreviews.com/wp-content/uploads/2023/03/Nigerian-Traditional-Dishes.jpg" },
        { id: 8, name: "Amala", price: 1200, image: "https://themedivoiceoau.com/wp-content/uploads/2022/11/images-93.jpeg" },
    ];

    const addToCart = (item) => {
        setCart([...cart, item]);
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
