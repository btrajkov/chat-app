import { FaSearch } from 'react-icons/fa'; // Import the search icon

export const Searchbar = ({ className }) => {
  return (
    <div className={`flex items-center bg-gray-800 text-gray-400 rounded-lg p-2 mt-2 mb-2 ${className}`}>
      <FaSearch className="text-xl mr-2" /> {/* Search icon */}
      <input
        type="text"
        placeholder="Pretraga..."
        className="bg-transparent focus:outline-none text-white w-full"
      />
    </div>
  );
};
