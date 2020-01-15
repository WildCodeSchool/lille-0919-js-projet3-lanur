const initialState = {
    offsetPosts: 0
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === 'PLUS_TEN') {
        newState.offsetPosts = newState.offsetPosts + 10
    }
    return newState
}
export default reducer;