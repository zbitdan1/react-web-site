import profileReducer from "./profile-reducer";
import  dialogsReducer  from "./dialogs-reducer";
import  sidebarReducer  from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi, how are you?", like: 23 },
        { message: "It's my first post", like: 15 },
      ],
      newPostText: "danyazb",
    },
    messagesPage: {
      messagesData: [
        { message: "Hi" },
        { message: "How are you?" },
        { message: "Yo" },
      ],
      newTextMessage: "write here",
      dialogs: [
        { id: 1, name: "Danya" },
        { id: 2, name: "Cenya" },
        { id: 3, name: "Venya" },
        { id: 4, name: "Nanya" },
        { id: 5, name: "Vanya" },
      ],
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSurbscriber() {
    console.log("State changed");
  },
  surbscribe(observer) {
    this._callSurbscriber = observer;
  },

  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSurbscriber(this._state);
  },
};

export default store;
window.store = store;
