
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ThreadSnippet from '../../components/ThreadSnippet/ThreadSnippet';
import threadService from '../../services/thredService';
import './ForumPage.css';

const ForumPage = () => {
    const [threads, setThreads] = useState([]);

    // Simulate an async operation, even though it's just importing a local file
    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const data = await Promise.resolve(threadService.fetchThreads());
                setThreads(data);
            } catch (error) {
                console.error('Failed to fetch threads:', error);
            }
        };
      
        fetchThreads();
    }, []);
    // [] is the dependency array- it tells React to run the effect once when the component mounts and not on every update

    return (
        <>
            <Navbar />
            <div className="f_content">
                <div className="f_threads">
                    {threads.map(thread => (
                        <ThreadSnippet
                            id={thread.id}
                            title={thread.title}
                            description={thread.description}
                            author={thread.author}
                            timestamp={thread.timestamp}
                            views={thread.views}
                            comments={thread.comments}
                            pinned={thread.pinned}
                            locked={thread.locked}
                        />
                    ))}
                </div>
                <div className="side_content"></div>
            </div>
        </>
    );

};

export default ForumPage;