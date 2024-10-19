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
import SideBarItem from "./SideBarItem"; 

export const SideBar = () => {
  return (
    <ul className="space-y-4">
      <SideBarItem iconName={FaBell} label={"Aktivnosti"} />
      <SideBarItem iconName={FaComments} label={"Ćaskanje"} />
      <SideBarItem iconName={FaUsers} label={"Timovi"} />
      <SideBarItem iconName={FaCalendarAlt} label={"Kalendar"} />
      <SideBarItem iconName={FaPhone} label={"Pozivi"} />
      <SideBarItem iconName={FaCloud} label={"OneDrive"} />
      <SideBarItem iconName={FaEllipsisH} label={"Više"} />
      <SideBarItem iconName={FaPlusSquare} label={"Aplikacije"} />
    </ul>
  );
};
