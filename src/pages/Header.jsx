import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link className="text-2xl font-bold" to={"/"}>🍽️ Diet App</Link>

        <nav className="flex gap-6">
          <Link
            to="/"
            className="hover:text-green-200 transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/meals"
            className="hover:text-green-200 transition font-medium"
          >
            Meals
          </Link>

          <Link
            to="/todo"
            className="hover:text-green-200 transition font-medium"
          >
            Todo
          </Link>
        </nav>
      </div>
    </header>
  );
};