const initialState = {
  offsetPosts: 0,
  jwt: null,
  reload: 0
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "PLUS_TEN":
      newState.offsetPosts = newState.offsetPosts + 10;
      return newState;
    case "RESET":
      newState.offsetPosts = 0;
      newState.reload = newState.reload + 1;
      return newState;
    case "SAVE_JWT":
      return {
        ...state,
        jwt: action.value
      };
    default:
      return newState;
  }
};

export default reducer;