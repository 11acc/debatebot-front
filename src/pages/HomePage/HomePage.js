
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

import './HomePage.css';

const HomePage = ({ navigateTo }) => {
    return (
        <>
            <Navbar />
            <div className="homepage-container">
                <h1 className="title">WELCOME TO THE</h1>
                <h2 className="h2">DEBATE CHATBOT</h2>
                <Link to="/chat"><button className="start-chat-button">Start ChatBot</button></Link>
            </div>
        </>
    );
};

export default HomePage;
