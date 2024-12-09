import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} CallOnDemand. All Rights Reserved.</p>
            <p>
                Designed by <a href="https://github.com">Abubakar Ibrahim</a>
            </p>
        </footer>
    );
};

export default Footer;
