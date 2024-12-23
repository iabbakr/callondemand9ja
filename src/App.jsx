import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CartPage from './pages/CartPage';
import UserPage from './pages/UserPage';

const App = () => {
    return (
        <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
                <Footer />
        </Router>
    );
};

export default App;
