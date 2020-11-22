import React from "react";
import { Provider } from "react-redux";
import { todos } from "./reducers/todos";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { List } from "components/List";

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer });
export const App = () => {
  return (
    <Provider store={store}>
      <List></List>
    </Provider>
  );
};
