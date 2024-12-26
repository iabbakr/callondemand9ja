import React, {useState} from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';


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
            
            <nav className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/user">User</Link>
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
