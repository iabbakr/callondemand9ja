import React from 'react';
import '../css/Header.css';


const Header = () => {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    return (
        <header className="header">
            <div className="logo">
                <h1>CallOnDemand</h1>
            </div>
            
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/user">User</a></li>  
                </ul>
            </nav>
            <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
    
};

export default Header;
