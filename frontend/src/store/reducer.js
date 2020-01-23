const initialState = {
  offsetPosts: 0,
  jwt: null,
  reload: 0,
  user_id: null,
  user_avatar: null,
  user_pseudo: null,
  user: {
    firstname: null,
    lastname: null,
    bio: null,
    age: null,
    city: null,
    country: null,
    mixer: null,
    youtube: null,
    twitch: null,
    discord_pseudo: null
  }
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
        jwt: action.value.token,
        user_id: action.value.user.id,
        user_avatar: action.value.user.avatar,
        user_pseudo: action.value.user.pseudo
      };
    default:
      return newState;
  }
};

export default reducer;
