
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HelpPage.css';

const HelpPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <button style={{ position: 'absolute', top: '50px', right: '20px' }}
                    onClick={() => navigate('/')}
            >
                Return to Home
            </button>

            <h1 style={{marginLeft: '600px'}}>Welcome to the Help Page</h1>
            <h2 style={{marginLeft: '600px'}}>If you have any questions or you are having trouble, please send us an email, thanks :) </h2>

        </div>
    );
};

export default HelpPage;