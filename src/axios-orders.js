import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-13f23.firebaseio.com/'
});


export default instance;