import axios from 'axios';

export default function () {
    const token = localStorage.getItem('token');
    // console.log("token", token);
    return axios.create ({
        headers: {
            'Content-Type': 'application/json',
            'token': `${token}`
        }
    });
};