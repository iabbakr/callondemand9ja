import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import CartPage from './components/CartPage';
import UserPage from './components/UserPage';

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
