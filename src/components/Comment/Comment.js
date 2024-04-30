
import React from 'react';
import moment from 'moment';

import '../TopThread/TopThread.css';

const Comment = ({ author, phrase, pfp, content, timestamp }) => {
    const timeAgo = moment(timestamp).fromNow();

    return (
        <div className='th_content'>
            <div className='commenter'>
                <div className='comm_img'>
                    <img src={pfp} alt={author} />
                </div>
                <div className='comm_info'>
                    <span className='comm_ph'>{author}</span>
                    {phrase}
                </div>
            </div>
            <div className='th_desc'>
                <div className='th_desc_top'>
                    {timeAgo}
                </div>
                {content}
            </div>
        </div>
    );
}

export default Comment;