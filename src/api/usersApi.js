import * as axios from "axios";
import getApiKey from "./ApiKey";

const usersApi = {
    getUsers: (currentPage, pageSize) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => {
            return response.data;
        });
    },

    followUser: (userId) => {
        return axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + userId, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": getApiKey()
            }
        }).then(response => {
            return response.data;
        });
    },

    unFollowUser: (userId) => {
        return axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + userId, {
            withCredentials: true,
            headers: {
                "API-KEY": getApiKey()
            }
        }).then(response => {
            return response.data;
        });
    }
}


export default usersApi;