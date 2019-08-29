import axios from 'axios';


const axiosWithAuth = () => {

    const token = localStorage.getItem('token');
    // console.log("token", token);
    return axios.create ({
        headers: {
            'Content-Type': 'application/json',
            'token': `${token}`
        }
    });
};

export default axiosWithAuth