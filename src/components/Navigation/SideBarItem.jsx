export const SideBarItem = ({ iconName: Icon, label }) => {
  return (
    <li
      // className="flex flex-col p-2 gap-0.5 items-center text-[10px] cursor-pointer border-l-[5px] border-l-transparent
      //  active:border-l-[rgba(82,88,148,255)]"
      className="flex p-4 gap-6 items-center
        text-[20px]
        text-inactive_text
        cursor-pointer
        border-l-[5px] border-l-transparent
       active:border-l-[rgba(82,88,148,255)]
       md:flex-col md:gap-1 md:text-[10px] md:p-2.5"
    >
      <Icon className="text-xl" />
      <span className="text-inactive_text">{label}</span>
    </li>
  );
};

export default SideBarItem;
