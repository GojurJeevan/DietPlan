import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Protein = ({ protein, setProtein }) => {
  return (
    <div className="relative w-full sm:w-80">
      <input
        type="number"
        placeholder="Search by protein (gm)..."
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-full border border-green-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};
