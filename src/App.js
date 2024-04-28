
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import AboutUsPage from './pages/AboutPage/AboutPage';
import ForumPage from './pages/ForumPage/ForumPage';
import HelpPage from './pages/HelpPage/HelpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignupPage';


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/forum" element={<ForumPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    {/* Redirect all other paths to home */}
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
