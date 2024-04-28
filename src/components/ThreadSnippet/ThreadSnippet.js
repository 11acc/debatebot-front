
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'; // library for formatting date

import './ThreadSnippet.css';

const ThreadSnippet = ({ id, title, description, author, timestamp, views, comments, pinned, locked }) => {
    // Only show the first 300 characters of the description
    const shortDesc = description.length > 300
        ? `${description.substring(0, 300)}...`
        : description;

    // Format the timestamp from the user's perspective
    const timeAgo = moment(timestamp).fromNow();

    // Define the path towards the thread snippet's respective thread
    const threadPath = `/thread/${id}`;

    return (
        <Link to={threadPath} className="thread_snippet">
            <h2 className='ts_title'>{title}</h2>
            <p className='ts_desc'>{shortDesc}</p>
            <div className="ts_footer">
                <span className='ts_author'>Created by {author} {timeAgo}</span>
                <div className='space'></div>
                <div className="metrics">
                    <span>{views} 👁️</span> • 
                    <span>{comments} 💬</span>
                </div>
            </div>
        </Link>
    );
};

export default ThreadSnippet;
