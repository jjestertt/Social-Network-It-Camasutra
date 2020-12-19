import * as axios from "axios";

const ProfileApi = {
    getUserProfile: (userId) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            return response.data
        });
    },
    getUserProfileStatus: (userId) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`).then(response => {
            return response.data
        });
    },
}

export default ProfileApi;