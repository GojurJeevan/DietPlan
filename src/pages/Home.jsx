import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center p-8">
        
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-green-700 mb-6">
          🍽️ Welcome to Diet App
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Explore healthy meals from around the world, track nutrition,
          and manage your daily tasks all in one place.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            to="/meals"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Explore Meals
          </Link>

          <Link
            to="/todo"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Open Todo
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🌍 Global Meals
            </h3>
            <p className="text-gray-600">
              Discover dishes from different countries and cuisines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              💪 Nutrition Info
            </h3>
            <p className="text-gray-600">
              Check calories, protein, carbs, and fats easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              📝 Todo Manager
            </h3>
            <p className="text-gray-600">
              Keep track of your daily tasks and stay productive.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};