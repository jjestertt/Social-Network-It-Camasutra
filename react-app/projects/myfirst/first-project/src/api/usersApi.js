import * as axios from "axios";

const usersApi = {
    getUsers: (currentPage, pageSize) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => {
            return response.data;
        });
    },

    followUser: (userId) => {
        return axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "c1ce2ea2-c228-4281-91e3-625c74c5b290"
            }
        }).then(response => {
            return response.data;
        });
    },

    unFollowUser: (userId) => {
        return axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {
            withCredentials: true,
            headers: {
                "API-KEY": "c1ce2ea2-c228-4281-91e3-625c74c5b290"
            }
        }).then(response => {
            return response.data;
        });
    }
}


export default usersApi;