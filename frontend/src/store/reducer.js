const initialState = {
    offsetPosts: 0,
    jwt: null,
    reload: 0,
    filters: [],
    user_id: null,
    searchResults: []
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
            return {
                ...state,
                jwt: action.value.token,
                user_id: action.value.user.id,
                user_avatar: action.value.user.avatar,
                user_pseudo: action.value.user.pseudo
            };
        case "FILTER":
            return {
                ...state,
                filters: action.value
            };
        case "SEARCH":
            return {
                ...state,
                searchResults: action.value
            };
        default:
            return newState
    }
}

export default reducer;
