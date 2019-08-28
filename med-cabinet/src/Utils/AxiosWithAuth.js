import axios from 'axios'

const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorization: loacalStorage.getStatus('token')

        }
    })
}

export default axiosWithAuth