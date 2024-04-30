
import comments from '../data/comments.json';

const fetchCommentByThreadId = async (thread_id) => {
    // Placeholder for future API call
  
    // For now, we're just using the local JSON file
    const com = comments.filter((comments) => comments.threadId == thread_id);
    return Promise.resolve(com);
};

export default {
    fetchCommentByThreadId
};
