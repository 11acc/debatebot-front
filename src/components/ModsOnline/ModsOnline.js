
import React from "react";

import './ModsOnline.css';

const ModsOnline = ({ name, title, pfp }) => {
    return (
        <div className="usr">
            <div className="usr_pfp">
                <img src={pfp} className="usr_img" alt={name} />
            </div>
            <div className="usr_naming">
                <h3 className="usr_name">{name}</h3>
                <p className="usr_ttl">{title}</p>
            </div>
        </div>
    );
};

export default ModsOnline;