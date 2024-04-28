
import React from 'react';
import { useParams } from 'react-router-dom';

const ThreadPage = () => {
    let { id } = useParams(); // hook to allow extraction of id from url
    
    // Use the id to fetch thread data or pass it to another component

    return (
        <div>
            {/* Content of the ThreadPage */}
            <h1>Thread: {id}</h1>
            {/* Render the full thread content here */}
        </div>
    );
};

export default ThreadPage;
