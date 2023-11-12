import axios from 'axios';
const axiosClient = axios.create();

axiosClient.interceptors.request.use((config) => {
    config.baseURL = 'http://tooman.ariesdev.kz/api/';
    return config;
});

export default axiosClient;
