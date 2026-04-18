import { Route, Routes } from "react-router-dom";
import { Meals } from "../pages/Meals";
import { MealDetails } from "../pages/MealDetails";
import { Home } from "../pages/Home";
import { Todo } from "../pages/Todo";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/meals" element={<Meals />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/todo" element={<Todo />}/>
      </Routes>
    </>
  );
};
