
import React from "react";
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    

    return (
        <div className="navbar">
            <div className="nwrap">
                <Link to={"/"} className="navlogo">
                    <img src="/assets/logo/logo.png" alt="logo" />
                </Link>
                <div className="navnav">
                    <Link to={"/chat"} className="navlink">Chat</Link>
                    <Link to={"/about"} className="navlink">About</Link>
                    <Link to={"/forum"} className="navlink">Forum</Link>
                    <Link to={"/help"} className="navlink">Help</Link>
                    <div className="space"></div>
                    <Link to={"/login"} className="navlink">Login</Link>
                    <Link to={"/signup"} className="navlink signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;