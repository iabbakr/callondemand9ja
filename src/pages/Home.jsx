import React from 'react';


const Home = () => {
    return (
        <div className="home">


            <h1>Welcome to CallOnDemand</h1>
            <p>Your favorite food, delivered fast and a perfect ride for your deliveries.</p>
            <div className='btn'>
                <a href="/menu" className="cta-button">View Food Menu</a>
                <a href="/" className="cta-button">Logistics</a>
            </div>
            
        </div>
    );
};

export default Home;
