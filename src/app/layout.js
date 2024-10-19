'use client'

import "./ui/globals.css";
import {inter} from "@/app/ui/fonts";
import {lusitana} from "@/app/ui/fonts";
import {Searchbar} from "@/components/Navigation/Searchbar";
import {useState} from "react";
import {SideBar} from "@/components/Navigation/SideBar";
import ChatPanelPage from "@/app/chat-panel/page";

export default function RootLayout({ children }) {
  const isSidebarOpen = useState(true);
  return (
    <html lang="en">
    <body className={`h-screen overflow-hidden`}>
    <div className="flex items-center bg-gray-800 text-white p-4 w-full">
      <div className="w-1/5">
        <button
            className="text-2xl"
        >
          &#9776;
          <div className="w-4/5">
            <Searchbar/> {/* Custom search bar */}
          </div>
        </button>
      </div>
    </div>
    <div className="flex flex-1 h-full">
      {/* Sidebar */}
      <div
          className={`transition-all duration-300 bg-gray-900 text-white h-full ${
              isSidebarOpen ? 'w-1/5' : 'w-0'
          } overflow-hidden`}
      >
        <SideBar/> {/* Custom sidebar */}
      </div>

      {/* Chat Panel */}
      <div className="w-1/5 bg-gray-200 h-full">
        <ChatPanelPage/> {/* Custom chat panel */}
      </div>

      {/* Main Page Content */}
      <div className="w-3/5 bg-white h-full p-6 overflow-y-auto">
        {children} {/* Page-specific content */}
      </div>
     </div>
    </body>
    </html>
);
}
