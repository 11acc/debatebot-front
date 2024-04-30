
import React from 'react';

const Comment = ({ author, content, timestamp }) => {
    return (
        <>
            <p>{author}</p>
            <p>{content}</p>
        </>
    );
}

export default Comment;