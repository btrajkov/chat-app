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
import { useRouter } from "next/navigation";

export const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const router = useRouter();

  const changePage = () => {
    router.push(`/chat-panel`);
  };

  const toggleVisibility = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div
      className={`z-10 bg-bg_sidebar flex text-inactive_text items-center w-full
        ${
          isSideBarOpen
            ? "h-full flex-col justify-center fixed"
            : "h-[9vh] flex-row justify-center items-center sticky"
        }
        md:justify-start md:items-start md:flex md:h-full
        `}
    >
      <CgClose
        onClick={toggleVisibility}
        className={`text-3xl absolute right-5 top-2 font-semibold
        cursor-pointer
      ${isSideBarOpen ? "block" : "hidden"}
      md:hidden`}
      />
      <div
        className={`w-full h-full flex flex-row items-center justify-between
        ${isSideBarOpen ? "hidden" : "block"}`}
      >
        <button
          className={`text-4xl ml-3 mt-[-10px] md:hidden
      ${isSideBarOpen ? "hidden" : "block"}
      `}
          onClick={toggleVisibility}
        >
          &#9776;
        </button>
        <div
          className={`${isSideBarOpen ? "hidden" : "block"} pr-10 md:hidden`}
        >
          <SearchBar />
        </div>
      </div>
      <ul
        className={`flex h-full flex-col justify-around pt-10 pb-10
        ${isSideBarOpen ? "flex" : "hidden"}
        md:block md:pt-0 md:gap-2 md:h-screen `}
      >
        <SideBarItem
          iconName={FaBell}
          pageName="neradi"
          label={"Activity"}
          link={"/activity"}
        />
        <SideBarItem
          iconName={FaComments}
          pageName="chats"
          label={"Chat"}
          link={"/chat-panel/1"}
        />
        <SideBarItem iconName={FaUsers} label={"Teams"} link={"/teams"} />
        <SideBarItem
          iconName={FaCalendarAlt}
          label={"Calendar"}
          link={"/calendar"}
        />
        <SideBarItem iconName={FaPhone} label={"Calls"} link={"/calls"} />
        <SideBarItem iconName={FaCloud} label={"OneDrive"} link={"/onedrive"} />
        <SideBarItem iconName={FaEllipsisH} label={"More"} link={"/more"} />
        <SideBarItem iconName={FaPlusSquare} label={"Apps"} link={"/apps"} />
      </ul>
    </div>
  );
};
