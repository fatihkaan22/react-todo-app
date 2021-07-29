import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  inputValue: "",
};

export const todoListSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addTodo: (state, action) => {
      console.log(action);
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((t) => id !== t.id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.map((t) => {
        if (id === t.id) {
          return { ...t, checked: !t.checked };
        }
        return t;
      });
    },
  },
});

export const { setInputValue, addTodo, removeTodo, toggleTodo } =
  todoListSlice.actions;

export const selectTodo = (state) => state.todolist.todos;
export const selectInputValue = (state) => state.todolist.inputValue;

export default todoListSlice.reducer;
