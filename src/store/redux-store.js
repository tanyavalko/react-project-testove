import { createStore } from "redux";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "CHANGE_STATUS_USER":
      const findIndex = state.users.findIndex(
        (item) => item.id === action.user.id
      );
      const users = [...state.users];
      users[findIndex] = action.user;
      window["localStorage"].setItem("SAVED_ITEMS", JSON.stringify(users));
      return {
        ...state,
        users: users,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: "SET_USERS", users });
export const changeStatusUSer = (user) => ({ type: "SET_USERS", user });

const store = createStore(usersReducer);

window.store = store;

export default store;
