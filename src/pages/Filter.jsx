import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Filter = ({ category, setCategory , categories}) => {
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
      <FontAwesomeIcon icon={faFilter} className="text-gray-500" />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-transparent outline-none text-sm cursor-pointer"
      >
        <option value="all">All</option>
        {categories.map((cat,index)=>(
            <option value={cat} key={index}>
                {cat}
            </option>
        ))}
      </select>
    </div>
  );
};