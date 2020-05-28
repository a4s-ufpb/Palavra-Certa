import axios from 'axios';

const api = axios.create({
    baseURL: 'http://educapi-v2.herokuapp.com'
});

export default api;