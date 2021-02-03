import * as axios from "axios";
import getApiKey from "./ApiKey";

const ProfileApi = {
    getUserProfile: (userId) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            return response.data
        });
    },
    getUserProfileStatusFromServer: (userId) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`, {withCredentials: true}).then(response => {
            return response.data
        });
    },
    setUserProfileStatusToServer: (userStatus) => {
        return axios.put("https://social-network.samuraijs.com/api/1.0/profile/status", {status: userStatus}, {
            withCredentials: true,
            headers: {
                "API-KEY": getApiKey()
            }
        }).then(response => {
            return response.data
        });
    },
}

export default ProfileApi;