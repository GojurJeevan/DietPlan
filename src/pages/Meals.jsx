import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMeals, setPage } from "../redux/MealsSlice";
import { ADD } from "../redux/TodoSlice";

export const Meals = () => {
  const { items, loading, page, perPage } = useSelector(
    (state) => state.meals
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-green-600">
        Loading...
      </div>
    );
  }

  let meals = [];
  if (Array.isArray(items)) {
    meals = items.slice((page - 1) * perPage, page * perPage);
  }

  const pagination = Math.ceil(items.length / perPage);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          🍽️ Meals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col items-center text-center"
            >

              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-100 mb-4">
                <img
                  src={meal.image || "/src/assets/hero.png"}
                  alt={meal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-lg font-semibold text-green-800 mb-1">
                {meal.name}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {meal.calories} kcal
              </p>

              <div className="flex gap-3 mt-auto">
                <Link
                  to={`/meal/${meal.id}`}
                  className="px-4 py-2 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  View
                </Link>

                <button
                  onClick={() => dispatch(ADD(meal))}
                  className="px-4 py-2 text-sm rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {Array.from({ length: pagination }, (_, i) => (
            <button
              key={i}
              onClick={() => dispatch(setPage(i + 1))}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                page === i + 1
                  ? "bg-green-600 text-white"
                  : "bg-white border border-green-300 text-green-700 hover:bg-green-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};