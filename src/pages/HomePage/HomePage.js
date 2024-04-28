
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ navigateTo }) => {
    return (
        <div className="homepage-container">
            <div className="links">
                <Link to="/about"><button>About Us</button></Link>
                <Link to="/forum"><button>Forum</button></Link>
                <Link to="/help"><button>Help</button></Link>
                <Link to="/signup"><button>SignUp</button></Link>
                <Link to="/login"><button>Log in</button></Link>
            </div>
            <h1 className="title">WELCOME TO THE</h1>
            <h2 className="h2">DEBATE CHATBOT</h2>
            <Link to="/chat"><button className="start-chat-button">Start ChatBot</button></Link>
        </div>
    );
};

export default HomePage;
