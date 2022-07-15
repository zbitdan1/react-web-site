const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  posts: [
    { message: "Hi, how are you?", like: 23 },
    { message: "It's my first post", like: 15 },
  ],
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: action.newPost,
        like: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
     case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

export default profileReducer;
