
import React from 'react';
import moment from 'moment'; // library for formatting date

import './ThreadSnippet.css';
import { ReactComponent as EyeIcon } from '../../assets/eye.svg';
import { ReactComponent as CommentsIcon } from '../../assets/comments.svg';
import { ReactComponent as Pin } from '../../assets/pin.svg';
import { ReactComponent as Lock } from '../../assets/lock.svg';

const ThreadSnippet = ({ title, description, author, timestamp, views, comments, pinned, locked }) => {
    // Only show the first 150 characters of the description
    const shortDesc = description.length > 150
        ? `${description.substring(0, 150)}...`
        : description;

    // Format the timestamp from the user's perspective
    const timeAgo = moment(timestamp).fromNow();

    return (
        <div className="thread_snippet">
            <h2 className='ts_title'>{title}</h2>
            <p className='ts_desc'>{shortDesc}</p>
            <span className='ts_god'>
                {pinned && <Pin className="icon" />} {locked && <Lock className="icon" />}
            </span>
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
