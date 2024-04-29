
import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';

import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            console.log('Login successful');
            alert("Login successful");
        } else {
            console.log('Invalid username or password');
            alert("Invalid username or password");
        }
    };

    return (
        <>
            <Navbar />
            <form className='logsing_contain' onSubmit={handleSubmit}>
                <h2 className='logsing_title'>
                    Login
                </h2>
                <div className='log_inpt'>
                    Username:
                    <div className='space'></div>
                    <input type="text" name="username" value={username} onChange={handleInputChange} />
                </div>
                <div className='log_inpt'>
                    Password:
                    <div className='space'></div>
                    <input type="password" name="password" value={password} onChange={handleInputChange} />
                </div>
                <input className='log_sub' type={"submit"} value={"Submit"} />
            </form>
        </>
    );
};

export default LoginPage;
