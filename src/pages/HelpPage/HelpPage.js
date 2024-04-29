
import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import './HelpPage.css';

const HelpPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 style={{marginLeft: '600px'}}>Welcome to the Help Page</h1>
                <h2 style={{marginLeft: '600px'}}>If you have any questions or you are having trouble, please send us an email, thanks :) </h2>
            </div>
        </>
    );
};

export default HelpPage;