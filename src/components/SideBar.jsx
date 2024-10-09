import {
  FaBell,
  FaComments,
  FaUsers,
  FaCalendarAlt,
  FaPhone,
  FaCloud,
  FaEllipsisH,
  FaPlusSquare,
} from "react-icons/fa";
export const SideBar = () => {
  return (
    <ul className="space-y-4">
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaBell />
        <span>Aktivnosti</span>
      </li>
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaComments />
        <span>Ćaskanje</span>
      </li>
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaUsers />
        <span>Timovi</span>
      </li>
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaCalendarAlt />
        <span>Kalendar</span>
      </li>
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaPhone />
        <span>Pozivi</span>
      </li>
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaCloud />
        <span>OneDrive</span>
      </li>
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaEllipsisH />
        <span>Više</span>
      </li>
      <li className="flex items-center justify-center space-x-3 text-xl hover:text-gray-400 hover:bg-gray-700 transition-colors duration-200 cursor-pointer p-2 rounded-lg">
        <FaPlusSquare />
        <span>Aplikacije</span>
      </li>
    </ul>
  );
};
