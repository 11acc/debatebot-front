
import threads from '../data/threads.json';

const fetchThreads = async () => {
    // Placeholder for future API call
  
    // For now, we're just using the local JSON file
    return Promise.resolve(threads);
};

const fetchThreadById = async (id) => {
    // Return thread info based on id
    const th = threads.filter((threads) => threads.id == id);
    return Promise.resolve(th);
}

export default {
    fetchThreads
    , fetchThreadById
};
