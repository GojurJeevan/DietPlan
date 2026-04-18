import { configureStore } from "@reduxjs/toolkit";
import meal from "./redux/MealsSlice";
import mealInf from "./redux/MealDetailsSlice";
import todoWork from "./redux/TodoSlice";

export default configureStore({
  reducer: {
    meals: meal,
    mealInfo: mealInf,
    todos: todoWork,
  },
});
