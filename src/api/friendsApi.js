import * as axios from "axios";

const friendsApi = {
    getFriends: () => {
        return axios.get("https://social-network.samuraijs.com/api/1.0/users/?page=1&count=6").then(response => {
            return (response.data);
        });
    }
}

export default friendsApi;