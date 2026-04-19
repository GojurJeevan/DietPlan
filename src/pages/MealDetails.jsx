import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { mealDetails } from "../redux/MealDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../redux/TodoSlice";

export const MealDetails = () => {
  const { data, loading, error } = useSelector((state) => state.mealInfo);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(mealDetails(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <h2 className="text-center mt-10 text-xl font-semibold text-gray-600">
        Loading...
      </h2>
    );

  if (error)
    return (
      <h2 className="text-center mt-10 text-xl font-semibold text-red-500">
        Error: {error}
      </h2>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-75 md:h-100 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
          <p className="text-gray-600 mb-4">{data.desc}</p>

          <div className="grid grid-cols-2 gap-3 text-sm mb-6">
            <p>
              <span className="font-semibold"> Region:</span> {data.region}
            </p>
            <p>
              <span className="font-semibold"> Country:</span> {data.country}
            </p>
            <p>
              <span className="font-semibold"> Category:</span>{" "}
              {data.category}
            </p>
            <p>
              <span className="font-semibold"> Best Time:</span>{" "}
              {data.bestTime}
            </p>
            <p>
              <span className="font-semibold"> Diet Type:</span>{" "}
              {data.dietType}
            </p>
            <p>
              <span className="font-semibold"> Macro:</span> {data.macroFocus}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Nutrition (per {data.per})
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-4 rounded-xl text-center shadow">
                <p className="text-sm text-gray-500">Protein</p>
                <h4 className="text-lg font-bold">{data.protein}g</h4>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl text-center shadow">
                <p className="text-sm text-gray-500">Carbs</p>
                <h4 className="text-lg font-bold">{data.carbs}g</h4>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl text-center shadow">
                <p className="text-sm text-gray-500">Fat</p>
                <h4 className="text-lg font-bold">{data.fat}g</h4>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl text-center shadow">
                <p className="text-sm text-gray-500">Calories</p>
                <h4 className="text-lg font-bold">{data.calories}</h4>
              </div>
            </div>

            <button className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow cursor-pointer" onClick={()=>dispatch(ADD(data))}>
              Add to Meal Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
