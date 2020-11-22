import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: ["The first item", "The second item", "A third item"],
  reducers: {
    removeOne: (state, action) => {
      const newState = [...state];
      newState.pop();
      return newState;
    },
  },
});
