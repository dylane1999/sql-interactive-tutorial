import { createReducer } from "@reduxjs/toolkit";
import { addUser, removeUser } from "../actions/types";

const initialState = [];

export const userReducer = createReducer(initialState, {
  [addUser]: (state, action) => {
    // "mutate" the array by calling push()
    state.push(action.payload.userData);
  },
  [removeUser]: (state, action) => {
    // "mutate" the array by calling pop()
    state.pop();
  },
});

export default userReducer;
