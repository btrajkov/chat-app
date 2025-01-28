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
import SideBarItemWorkVersion from "./SideBarItemWorkVersion";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/Navigation/SearchBar";
import { useRouter } from "next/navigation";

export const SideBarWorkVersion = () => {
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
        home-md:justify-start home-md:items-start home-md:flex home-md:h-full
        `}
    >
      <CgClose
        onClick={toggleVisibility}
        className={`text-3xl absolute right-5 top-2 font-semibold
        cursor-pointer
      ${isSideBarOpen ? "block" : "hidden"}
      home-md:hidden`}
      />
      <div
        className={`w-full h-full flex flex-row items-center justify-between
        ${isSideBarOpen ? "hidden" : "block"}`}
      >
        <button
          className={`text-4xl ml-3 mt-[-10px] home-md:hidden
      ${isSideBarOpen ? "hidden" : "block"}
      `}
          onClick={toggleVisibility}
        >
          &#9776;
        </button>
        <div
          className={`${isSideBarOpen ? "hidden" : "block"} pr-10 home-md:hidden`}
        >
          <SearchBar />
        </div>
      </div>
      <ul
        className={`flex h-full flex-col justify-around pt-10 pb-10
        ${isSideBarOpen ? "flex" : "hidden"}
        home-md:block home-md:pt-0 home-md:gap-2 home-md:h-screen `}
      >
        <SideBarItemWorkVersion
          iconName={FaBell}
          pageName="neradi"
          label={"Activity"}
          link={"/activity"}
          handleToggleVisibility={toggleVisibility}
        />
        <SideBarItemWorkVersion
          iconName={FaComments}
          pageName="chats"
          label={"Chat"}
          link={"/chat-panel/1"}
          handleToggleVisibility={toggleVisibility}
        />
        <SideBarItemWorkVersion
          iconName={FaUsers}
          label={"Teams"}
          link={"/teams"}
          handleToggleVisibility={toggleVisibility}
        />
        <SideBarItemWorkVersion
          iconName={FaCalendarAlt}
          label={"Calendar"}
          link={"/calendar"}
          handleToggleVisibility={toggleVisibility}
        />
        <SideBarItemWorkVersion
          iconName={FaPhone}
          label={"Calls"}
          link={"/calls"}
          handleToggleVisibility={toggleVisibility}
        />
        <SideBarItemWorkVersion
          iconName={FaCloud}
          label={"OneDrive"}
          link={"/onedrive"}
          handleToggleVisibility={toggleVisibility}
        />
        <SideBarItemWorkVersion
          iconName={FaEllipsisH}
          label={"More"}
          link={"/more"}
          handleToggleVisibility={toggleVisibility}
        />
        <SideBarItemWorkVersion
          iconName={FaPlusSquare}
          label={"Apps"}
          link={"/apps"}
          handleToggleVisibility={toggleVisibility}
        />
      </ul>
    </div>
  );
};
