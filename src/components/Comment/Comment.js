
import React from 'react';

const Comment = ({ author, content, timestamp }) => {
    return (
        <div>
            <p>{author}</p>
            <p>{content}</p>
        </div>
    );
}

export default Comment;