"use client";

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
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/Navigation/SearchBar";

export const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleVisibility = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div
      className={`bg-bg_sidebar block flex text-inactive_text items-center h-full w-full
        ${
          isSideBarOpen
            ? "h-full flex-col justify-center fixed"
            : "h-[10vh] flex-row justify-center items-center block"
        }`}
    >
      <CgClose
        onClick={toggleVisibility}
        className={`text-3xl absolute right-5 top-2 font-semibold
        cursor-pointer
      ${isSideBarOpen ? "block" : "hidden"}
      `}
      />
      <div
        className={`w-full h-full flex flex-row items-center justify-between
        ${isSideBarOpen ? "hidden" : "block"}`}
      >
        <button
          className={`text-4xl ml-3 mt-[-10px]
      ${isSideBarOpen ? "hidden" : "block"}
      `}
          onClick={toggleVisibility}
        >
          &#9776;
        </button>
        <div className={`${isSideBarOpen ? "hidden" : "block"} pr-10 `}>
          <SearchBar />
        </div>
      </div>
      <ul
        // className="flex flex-col justify-around gap-2"
        className={`flex flex-col justify-around h-full pt-5 pb-5
        ${isSideBarOpen ? "block" : "hidden"}
        `}
      >
        <SideBarItem iconName={FaBell} label={"Activity"} />
        <SideBarItem iconName={FaComments} label={"Chat"} />
        <SideBarItem iconName={FaUsers} label={"Teams"} />
        <SideBarItem iconName={FaCalendarAlt} label={"Calendar"} />
        <SideBarItem iconName={FaPhone} label={"Calls"} />
        <SideBarItem iconName={FaCloud} label={"OneDrive"} />
        <SideBarItem iconName={FaEllipsisH} label={"More"} />
        <SideBarItem iconName={FaPlusSquare} label={"Apps"} />
      </ul>
    </div>
  );
};
