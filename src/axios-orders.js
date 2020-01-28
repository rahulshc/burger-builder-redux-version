import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-42ba9.firebaseio.com/'
});

export default instance;