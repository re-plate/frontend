import axios from 'axios';

export const login = (creds) => dispatch => {
    return axios
    .post('https://re-plate.herokuapp.com/api/v1/auth/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: 'LOGIN_SUCCESS', payload: res.data
        })
    }).catch(error => console.log(error))
};

export const signUp = (creds) => dispatch => {
    return axios
    .post('https://re-plate.herokuapp.com/api/v1/auth/register', creds)
    .then(res => {
        console.log(res.data)
        dispatch({
            type: 'REGISTER_SUCCESS', payload: res.data
        })
    }).catch(error => console.log(error))
};