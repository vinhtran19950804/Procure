import axios from 'axios';

export function login(data) {
    return dispatch => {
        return axios.post('localhost:1337/auth/login', data)
    }
}