
import React from 'react';

const TopThread = ({ title, description, author, timestamp, views, locked }) => {
    return (
        <div>
            <h1>Thread: {title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default TopThread;