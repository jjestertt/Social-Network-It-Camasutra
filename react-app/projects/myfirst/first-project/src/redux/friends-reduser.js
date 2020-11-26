let initialState = {
    friends: [
        { id: 1, name: 'Макс', photo: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg' },
        { id: 2, name: 'Саша', photo: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg' },
        { id: 3, name: 'Лера', photo: 'https://avatarko.ru/img/kartinka/9/igra_multfilm_minion_Hitman_8973.jpg' },
        { id: 4, name: 'Инокентий', photo: 'https://bugaga.ru/uploads/posts/2012-01/1327530915_avatar-1.jpg' },
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;