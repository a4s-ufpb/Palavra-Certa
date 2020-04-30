import axios from 'axios';

const api = axios.create({
    baseURL: 'https://educapi.herokuapp.com'
});

export default api;