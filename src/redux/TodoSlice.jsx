import { createSlice } from "@reduxjs/toolkit";

const todo = JSON.parse(localStorage.getItem("todoList")) || [];

let TodoSlice = createSlice({
  name: "todos",
  initialState: todo,

  reducers: {
    ADD: (state, action) => {
      const meal = action.payload;
      const exists = state.find((item) => item.name === meal.name);

      if (!exists) {
        state.push(meal);
        localStorage.setItem("todoList", JSON.stringify(state));
      }
    },

    REMOVE: (state, action) => {
      const name = action.payload;
      const updated = state.filter((item) => item.name !== name);

      localStorage.setItem("todoList", JSON.stringify(updated));
      return updated;
    },

    SetPage:(state,action)=>{
        state.page = action.payload
    }
  },
});

export default TodoSlice.reducer;
export const { ADD, REMOVE,SetPage } = TodoSlice.actions;
