import * as axios from "axios";
import getApiKey from "./ApiKey";

const authApi = {
    getAuth: () => {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    },
    logout: () => {
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/logout', {}, {
            withCredentials: true,
            headers: {
                'API-KEY': getApiKey(),
            }
        }).then(response => {
            return response.data;
        })
    },
    login: (email, password, rememberMe) => {
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
        }, {
            withCredentials: true,
            headers:{
                'API-KEY': getApiKey(),
            }
        }).then(response =>  response.data);
    }
}

export default authApi;