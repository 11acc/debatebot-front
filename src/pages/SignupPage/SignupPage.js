
import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';

import '../LoginPage/LoginPage.css';

const SignUpPage = () => {
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

        if (username.length < 4 || username.length > 18) {
            console.log('Username must be between 4 and 18 characters');
            alert('Username must be between 4 and 18 characters');
            return;
        }

        if (password.length < 4 || password.length > 18) {
            console.log('Password must be between 4 and 18 characters');
            alert('Password must be between 4 and 18 characters');
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        console.log('Username: ' + username);
        console.log('Password: ' + password);
        alert('Sign Up complete!');
    };

    return (
        <>
            <Navbar />
            <form className='logsing_contain' onSubmit={handleSubmit}>
                <h2 className='logsing_title'>
                    Sign Up
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

export default SignUpPage;
