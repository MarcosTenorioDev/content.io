import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://contentai-backend-production.up.railway.app'
})