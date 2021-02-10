import * as axios from "axios";

const securityApi = {
    getCaptcha: () => {
        return axios.get("https://social-network.samuraijs.com/api/1.0/security/get-captcha-url", {
            withCredentials: true
        })
            .then(response => response.data);
    },
}

export default securityApi;