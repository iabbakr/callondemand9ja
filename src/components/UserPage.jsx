// UserPage.js
import React from 'react';

const UserPage = ({ cart }) => {
    const user = {
        name: 'Abubakar Ibrahim',
        email: 'abubakaribrahim603@gmail.com',
        phone: '+2348140002708',
        address: '589 Thailand Street Efab Queens Estate Karsana, Abuja, Nigeria',
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

            <h3>Your Cart</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - N{item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
