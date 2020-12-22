import * as axios from "axios";

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
        return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: userStatus}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c1ce2ea2-c228-4281-91e3-625c74c5b290'
            }
        }).then(response => {
            return response.data
        });
    },

}

export default ProfileApi;