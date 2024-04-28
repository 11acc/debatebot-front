
import React from "react";

import './ModsOnline.css';

const ModsOnline = ({ name, title, pfp }) => {
    return (
        <ul className="user_wrp">
            <li className="usr pretty">
                <div className="usr_pfp">
                    <img src={pfp} className="usr_img" />
                </div>
                <div className="usr_naming">
                    <h3 className="usr_name">{name}</h3>
                    <p className="usr_ttl">{title}</p>
                </div>
            </li>
        </ul>
    );
};

export default ModsOnline;