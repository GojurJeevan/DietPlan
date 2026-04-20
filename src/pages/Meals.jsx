import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMeals, setPage } from "../redux/MealsSlice";
import { ADD } from "../redux/TodoSlice";
import { Protein } from "./Protein";
import { Filter } from "./Filter";

export const Meals = () => {
  const { items, loading, page, perPage } = useSelector((state) => state.meals);
  const [protein, setProtein] = useState("");
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-green-600">
        Loading meals...
      </div>
    );
  }

  const categories = [
    ...new Set(items.map((meal) => meal.category?.toLowerCase())),
  ];

  let filteredItems = [];
  if (Array.isArray(items)) {
    filteredItems = items.filter((meal) => {
      const proteinMatch = protein ? meal.protein >= Number(protein) : true;

      const categoryMatch =
        category === "all" ? true : meal.category?.toLowerCase() === category;

      return proteinMatch && categoryMatch;
    });
  }

  const meals = filteredItems.slice((page - 1) * perPage, page * perPage);

  const pagination = Math.ceil(filteredItems.length / perPage);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl p-6 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            🍽️ Meals
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Protein
              protein={protein}
              setProtein={(value) => {
                setProtein(value);
                dispatch(setPage(1));
              }}
            />

            <Filter
              category={category}
              setCategory={(value) => {
                setCategory(value);
                dispatch(setPage(1));
              }}
              categories={categories}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div
                key={meal.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 p-5 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-100 mb-4 shadow-sm">
                  <img
                    src={meal.image || "/src/assets/hero.png"}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-lg font-semibold text-green-800 mb-1">
                  {meal.name}
                </h2>

                <p className="text-sm text-gray-500 mb-4">
                  {meal.protein}g protein
                </p>

                <div className="flex gap-2 mt-auto">
                  <Link
                    to={`/meal/${meal.id}`}
                    className="px-4 py-2 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition shadow-sm"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => dispatch(ADD(meal))}
                    className="px-4 py-2 text-sm rounded-full bg-green-500 text-white hover:bg-green-600 transition shadow-sm"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No meals found
            </div>
          )}
        </div>

        {pagination > 1 && (
          <div className="flex justify-center gap-2 mt-10 flex-wrap">
            {Array.from({ length: pagination }, (_, i) => (
              <button
                key={i}
                onClick={() => dispatch(setPage(i + 1))}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  page === i + 1
                    ? "bg-green-600 text-white shadow"
                    : "bg-white border border-green-300 text-green-700 hover:bg-green-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
