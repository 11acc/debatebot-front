
import threads from '../data/threads.json';

const fetchThreads = async () => {
    // Placeholder for future API call
  
    // For now, we're just using the local JSON file
    return Promise.resolve(threads);
};

export default {
    fetchThreads
};
