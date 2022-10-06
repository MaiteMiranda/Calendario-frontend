import axios from 'axios';
import { getVariables } from '../helpers';

const { VITE_API_URL } = getVariables()

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default calendarApi;



