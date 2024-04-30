
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import TopThread from '../../components/TopThread/TopThread';
import Comment from '../../components/Comment/Comment';

import threadService from '../../services/threadService';
import commentsService from '../../services/commentsService';

const ThreadPage = () => {
    const { id } = useParams(); // hook to allow extraction of id from url
    const [thread, setThread] = useState([]); // state to hold thread data
    const [comment, setComment] = useState([]); // state to hold comment data
    
    // Use the id to fetch thread data or pass it to another component
    useEffect(() => {
        const fetchThread = async () => {
            try {
                // Fetch threads
                const threadsData = await threadService.fetchThreadById(id);
                setThread(threadsData);

                // Fetch comments
                const commentsData = await commentsService.fetchCommentByThreadId(id);
                setComment(commentsData);
            } catch (error) {
                console.error('Failed to fetch thread:', error);
            }
        };

        fetchThread();
    }, [id]); // Dependency array includes id to refetch when id changes

    return (
        <>
            <Navbar />
            <>
                {thread ? (
                    thread.map(th => (
                        <div key={th.id}>
                            <TopThread title={th.title} description={th.description} author={th.author} timestamp={th.timestamp} views={th.views} locked={th.locked} />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> // Display a loading message while data is being fetched
                )}
            </>
            <>
                {comment ? (
                    comment.map(com => (
                        <div key={com.id}>
                            <Comment author={com.author} content={com.content} timestamp={com.timestamp} />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </>
        </>
    );
};

export default ThreadPage;
