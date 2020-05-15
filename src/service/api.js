import axios from 'axios';

const api = axios.create({
    baseURL: 'http://educapi.herokuapp.com'
});

export default api;