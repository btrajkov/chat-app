import { SideBar } from "./Sidebar";

export const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`bg-black fixed top-0 left-0 h-full w-full text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } p-4 flex flex-col`}
    >
      {/* Close Button */}
      <button
        className="text-white text-3xl self-end p-1 hover:text-gray-400"
        onClick={onClose}
      >
        &times; {/* X symbol */}
      </button>

<SideBar/>    
    </div>
  );
};
