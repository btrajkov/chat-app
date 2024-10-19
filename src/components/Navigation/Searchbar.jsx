import { FaSearch } from 'react-icons/fa'; // Import the search icon

export const Searchbar = ({ className }) => {
  return (
    <div className={`flex flex-col items-center  items-start gap-10 justify-center bg-gray-800 text-gray-400 w-screen`}>
      <FaSearch className="block text-xl mr-2" /> {/* Search icon */}
      <input
        type="text"
        placeholder="Pretraga..."
        className="bg-transparent focus:outline-none text-white block"
      />
    </div>
  );
};
