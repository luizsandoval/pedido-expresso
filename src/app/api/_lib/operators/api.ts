import axios from 'axios';

const api = axios.create({
    baseURL: process.env.MONGO_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/ejson',
        'api-key': process.env.MONGO_API_KEY,
        'Access-Control-Request-Headers': '*',
    },
});

export { api };
