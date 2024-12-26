import React, {useState} from 'react';
import '../css/Header.css';


const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>CallOnDemand</h1>
            </div>
            
            <nav>
                <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/user">User</a></li>  
                </ul>
            </nav>
            <div class="menu-toggle" onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
    
};

export default Header;
