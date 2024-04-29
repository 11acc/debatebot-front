
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import ThreadSnippet from '../../components/ThreadSnippet/ThreadSnippet';
import OBox from '../../components/OBox/OBox';

import threadService from '../../services/thredService';
import modsOnService from '../../services/modsOnService';
import usrsOnService from '../../services/usrsOnService';

import './ForumPage.css';

const ForumPage = () => {
    const [threads, setThreads] = useState([]);
    const [modsOn, setModsOn] = useState([]);
    const [usrsOn, setUsrsOn] = useState([]);

    // Simulate an async operation, even though it's just importing a local file
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch threads
                const threadsData = await threadService.fetchThreads();
                setThreads(threadsData);
        
                // Fetch mods online
                const modsData = await modsOnService.fetchModsOn();
                setModsOn(modsData);
        
                // Fetch users online
                const usrsData = await usrsOnService.fetchUsrsOn();
                setUsrsOn(usrsData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
      
        fetchData();
    }, []);
    // [] is the dependency array- it tells React to run the effect once when the component mounts and not on every update

    return (
        <>
            <Navbar />
            <div className="f_content">
                <div className='f_wrp'>
                    <div className="f_threads">
                        {threads.map(thread => (
                            <Link to={`/thread/${thread.id}`} key={thread.id}>
                                <ThreadSnippet
                                    title={thread.title}
                                    description={thread.description}
                                    author={thread.author}
                                    timestamp={thread.timestamp}
                                    views={thread.views}
                                    comments={thread.comments}
                                    pinned={thread.pinned}
                                    locked={thread.locked}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="side_content">
                        <OBox usertype="Moderators" users={modsOn} />
                        <OBox usertype="Users" users={usrsOn} />
                    </div>
                </div>
            </div>
        </>
    );

};

export default ForumPage;