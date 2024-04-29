
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="homepage-container">
                <h1 className="title">
                    WELCOME TO THE<br />
                    DEBATE CHATBOT
                </h1>
                <Link to="/chat">
                    <button className='chatbutton'>Start ChatBot</button>
                </Link>
            </div>
        </>
    );
};

export default HomePage;
