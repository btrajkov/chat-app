import { SideBar } from "./SideBar";

export const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`bg-black fixed top-0 left-0 h-full w-full md:w-1/5 md:min-w-44 md:max-w-52 text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } p-4 flex flex-col`}
    >
      {/* Close Button */}
      <button
        className="text-white text-3xl self-end p-1 hover:text-gray-400 md:hidden"
        onClick={onClose}
      >
        &times; {/* X symbol */}
      </button>
      <p className='p-2 hidden md:block'>  &#9776;</p>

<SideBar/>    
    </div>
  );
};
