// ForumPage.js

import React, { useState } from 'react';

const ForumPage = () => {
    const [posts, setPosts] = useState([]);

    const handleAddPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div className="forum-page">
            <h1>Forum</h1>
            <PostForm onAddPost={handleAddPost} />
            <hr />
            <PostList posts={posts} />
        </div>
    );
};

const PostForm = ({ onAddPost }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newPost = { id: Date.now(), text };
        onAddPost(newPost);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post..."
          rows="5"
          cols="50"
      ></textarea>
            <br />
            <button type="submit">Post</button>
        </form>
    );
};

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <Post key={post.id} text={post.text} />
            ))}
        </div>
    );
};

const Post = ({ text }) => {
    return (
        <div className="post">
            <p>{text}</p>
        </div>
    );
};

export default ForumPage;
