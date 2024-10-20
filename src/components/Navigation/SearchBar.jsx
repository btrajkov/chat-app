import { FaSearch } from "react-icons/fa"; // Import the search icon

export const SearchBar = ({ className }) => {
  return (
    <div
      className={`flex flex-row w-full rounded-[0.5rem]  pt-0.5 pb-0.5 gap-2 text-base 
     justify-start pl-5 items-center bg-bg_search text-active_text placeholder:text-inactive_text
    md:w-2/4`}
    >
      <label htmlFor="searchInput" className="cursor-pointer">
        <FaSearch className="" /> {/* Search icon */}
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search (CMD+E)"
        className="bg-transparent focus:outline-none text-white w-3/4"
      />
    </div>
  );
};
