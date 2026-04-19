import { useDispatch, useSelector } from "react-redux";
import { REMOVE } from "../redux/TodoSlice";
import { useState } from "react";

export const Todo = () => {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const perPage = 6;

  const meals = data.slice((page - 1) * perPage, page * perPage);
  const pagination = Math.ceil(data.length / perPage);

  if (!data.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-green-100">
        <h1 className="text-2xl font-semibold text-gray-500">
          📝 No items in Todo
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-green-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Your Todo Meals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {meals.map((diet, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >

              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-100 mb-4">
                <img
                  src={diet.image || "/src/assets/hero.png"}
                  alt={diet.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-lg font-bold text-green-800 mb-1">
                {diet.name}
              </h2>

              <p className="text-xs text-gray-400 mb-3">
                Per {diet.per}
              </p>

              <div className="grid grid-cols-2 gap-3 w-full text-sm mb-4">
                <div className="bg-green-50 p-2 rounded-lg">
                  <p className="text-gray-500">Protein</p>
                  <p className="font-semibold text-green-700">{diet.protein}g</p>
                </div>

                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="text-gray-500">Carbs</p>
                  <p className="font-semibold text-blue-700">{diet.carbs}g</p>
                </div>

                <div className="bg-yellow-50 p-2 rounded-lg">
                  <p className="text-gray-500">Fat</p>
                  <p className="font-semibold text-yellow-700">{diet.fat}g</p>
                </div>

                <div className="bg-red-50 p-2 rounded-lg">
                  <p className="text-gray-500">Calories</p>
                  <p className="font-semibold text-red-600">
                    {diet.calories} kcal
                  </p>
                </div>
              </div>

              <button
                onClick={() => dispatch(REMOVE(diet.name))}
                className="mt-auto px-4 py-2 text-sm rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {Array.from({ length: pagination }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
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