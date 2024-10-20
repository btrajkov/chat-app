export const SideBarItem = ({ iconName: Icon, label }) => {
  return (
    <li
      // className="flex flex-col p-2 gap-0.5 items-center text-[10px] cursor-pointer border-l-[5px] border-l-transparent
      //  active:border-l-[rgba(82,88,148,255)]"
        className="flex p-4 gap-6 items-center text-[20px] cursor-pointer border-l-[5px] border-l-transparent
       active:border-l-[rgba(82,88,148,255)]"
    >
      <Icon className="text-xl"/>
      <span className="text-gray-300">{label}</span>
    </li>
  );
};

export default SideBarItem;
