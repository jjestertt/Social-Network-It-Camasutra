import * as axios from "axios";

const authApi = {
    getAuth: () => {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    }
}

export default authApi;