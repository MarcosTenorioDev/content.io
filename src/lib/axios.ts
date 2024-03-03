import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://content-io-6703f95eb214.herokuapp.com'
})