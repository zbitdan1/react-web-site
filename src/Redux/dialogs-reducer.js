const ADD_MESSAGE_POST = "ADD-MESSAGE-POST";

let initialState = {
  messagesData: [
    { message: "Hi" },
    { message: "How are you?" },
    { message: "Yo" },
  ],
  dialogs: [
    { id: 1, name: "Danya" },
    { id: 2, name: "Cenya" },
    { id: 3, name: "Venya" },
    { id: 4, name: "Nanya" },
    { id: 5, name: "Vanya" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_POST: 
    return {
      ...state,
      messagesData: [...state.messagesData, {
        id: 6,
        message: action.valueMessage,
      }]
    };
    default:
      return state;
  }
};

export const addMesageActionCreator = (valueMessage) => ({ type: ADD_MESSAGE_POST, valueMessage  });

export default dialogsReducer;
