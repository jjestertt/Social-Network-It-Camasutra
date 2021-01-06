import * as axios from "axios";

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
                'API-KEY': 'c1ce2ea2-c228-4281-91e3-625c74c5b290',
            }
        }).then(response => {
            return response.data;
        })
    },
    login: (email, password, rememberMe) => {
        return axios.post ('https://social-network.samuraijs.com/api/1.0/auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
        }, {
            withCredentials: true,
            headers:{
                'API-KEY': 'c1ce2ea2-c228-4281-91e3-625c74c5b290',
            }
        }).then(response =>  response.data);
    }
}

export default authApi;