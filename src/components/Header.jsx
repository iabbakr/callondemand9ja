import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1>CallOnDemand</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/cart">Cart</a>
                <a href="/user">User</a>
            </nav>
        </header>
    );
};

export default Header;
