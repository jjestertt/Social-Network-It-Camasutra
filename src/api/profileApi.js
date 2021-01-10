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
        return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: userStatus}, {
            withCredentials: true,
            headers: {
                'API-KEY': getApiKey()
            }
        }).then(response => {
            return response.data
        });
    },
    setUserInformationToServer: () => {
        return axios.put(`https://social-network.samuraijs.com/api/1.0/profile`, {
            lookingForAJob: true,
            lookingForAJobDescription: "Ищу вакансию Frontend ReactJS Developer",
            fullName: "Максим Сивак",
            aboutMe: "Привет! Я молодец! Я знаю HTML5, CSS3, основы JS, ES6, Библиотеки React,Redux,Thunk. " +
                "Огромное спасибо Димычу за такой полезный курс. Чувак ты реально меняешь жизни людей к лучшему!" ,
            contacts: {
                github: 'https://github.com/jjestertt/',
                vk: 'https://vk.com/maks_sivak',
                facebook: null,
                instagram: 'https://www.instagram.com/ma.ksivak/',
                twitter: null,
                website: null,
                youtube: null,
                mainLink: null,
            }

        }, {
            withCredentials: true,
            headers: {
                'API-KEY': getApiKey()
            }
        }).then(response => {
            console.log(response.data)
            return response.data
        });
    },

}

export default ProfileApi;