const initialState = {
    offsetPosts: 0,
    jwt: null,
    reload: 0,
    user_id: null
};

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'PLUS_TEN':
            newState.offsetPosts = newState.offsetPosts + 10
            return newState
        case 'RESET':
            newState.offsetPosts = 0
            newState.reload = newState.reload + 1
            return newState
        case "SAVE_JWT":
            console.log(action.value)
            return {
                ...state,
                jwt: action.value.token,
                user_id: action.value.user.id,
                user_avatar: action.value.user.avatar,
                user_pseudo: action.value.user.pseudo
            };
        default:
            return newState
    }
}

export default reducer;