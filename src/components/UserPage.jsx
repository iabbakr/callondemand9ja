// UserPage.js
import React from 'react';

const UserPage = () => {
    const user = {
        name: "Abubakar Ibrahim",
        email: "abubakaribrahim603@gmail.com",
        phone: "+2348140002708",
        address: "589 Thailand Street Efab Queens Estate Karsana, Abuja, Nigeria",
        orders: [
            { id: 1, items: ["Jollof", "Fried Rice"], total: 3600 },
            { id: 2, items: ["Spaghetti"], total: 1500 },
        ],
    };

    return (
        <div className="user-page">
            <h2>User Profile</h2>
            <div className="user-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Address:</strong> {user.address}</p>
            </div>
            <h3>Order History</h3>
            <ul className="order-history">
                {user.orders.map((order) => (
                    <li key={order.id}>
                        <p><strong>Order #{order.id}:</strong> {order.items.join(", ")}</p>
                        <p><strong>Total:</strong> N{order.total}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
