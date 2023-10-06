import axios from 'axios';

const api = axios.create({
    baseURL: process.env.MONGODB_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/ejson',
        'api-key': process.env.MONGODB_API_KEY,
        'Access-Control-Request-Headers': '*',
    },
});

export { api };
