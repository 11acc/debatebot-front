
import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import './HelpPage.css';

const HelpPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h2>
                    If you have any questions or you are having trouble, please send us an email, thanks :)
                </h2>
            </div>
        </>
    );
};

export default HelpPage;