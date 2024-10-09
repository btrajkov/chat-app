export const SideBarItem = ({ iconName: Icon, label }) => {
  return (
    <li
      className="flex items-center justify-center space-x-3 text-xl cursor-pointer p-2 rounded-lg
       hover:text-gray-400 hover:bg-neutral-900 active:bg-neutral-800 transition-colors duration-200  
md:border-b-2  md:justify-start  md:border-b-gray-500
    "
    >
      <Icon />
      <span>{label}</span>
    </li>
  );
};

export default SideBarItem;
