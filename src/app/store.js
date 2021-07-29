import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../features/todo/todoListSlice';

export const store = configureStore({
  reducer: {
    todolist: todoListReducer,
  },
});
