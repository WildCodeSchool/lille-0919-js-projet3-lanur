const initialState = {
  offsetPosts: 0,
  jwt: null,
  reload: 0,
  filters: [],
  user_id: null,
  user_avatar: null,
  user_pseudo: null,
  user: {
    id: null,
    avatar: null,
    pseudo: null,
    firstname: null,
    lastname: null,
    age: null,
    country: null,
    city: null,
    gender: null,
    role: null,
    bio: null,
    twitch: null,
    youtube: null,
    mixer: null,
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
    case "SAVE_PROFILE_DATA":
      newState.user = { ...newState.user, ...action.value };
      return newState;
    case "FILTER":
      return {
        ...state,
        filters: action.value
      };  
    default:
      return newState;
  }
};

export default reducer;
