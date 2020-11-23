import React from 'react';
import { Provider } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from 'reducers/todos';
import { List } from './components/List';

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
  // We can't useDispatch here
  //  or useSelector
  return (
    <Provider store={store}>
      <List></List>
    </Provider>
  );
};
