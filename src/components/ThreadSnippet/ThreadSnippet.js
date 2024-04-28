
import React from 'react';
import moment from 'moment'; // library for formatting date

import './ThreadSnippet.css';
import { ReactComponent as EyeIcon } from '../../assets/eye.svg';
import { ReactComponent as CommentsIcon } from '../../assets/comments.svg';

const ThreadSnippet = ({ title, description, author, timestamp, views, comments, pinned, locked }) => {
    // Only show the first 75 characters of the description
    const shortDesc = description.length > 75
        ? `${description.substring(0, 75)}...`
        : description;

    // Format the timestamp from the user's perspective
    const timeAgo = moment(timestamp).fromNow();

    return (
        <div className="thread_snippet">
            <h2 className='ts_title'>{title}</h2>
            <p className='ts_desc'>{shortDesc}</p>
            <div className="ts_footer">
                <p>
                    <span className='ts_author'>{author}</span> threaded {timeAgo}
                </p>
                <div className='space'></div>
                <div className="ts_metrics">
                    <span><EyeIcon className="icon" /> {views}</span>
                    <span><CommentsIcon className="icon" /> {comments}</span>
                </div>
            </div>
        </div>
    );
};

export default ThreadSnippet;
