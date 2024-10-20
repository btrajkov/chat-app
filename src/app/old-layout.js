//
// import "./ui/globals.css";
// import {SearchBar} from "@/components/Navigation/SearchBar";
// import {SideBar} from "@/components/Navigation/SideBar";
// import ChatPanelPage from "@/app/chat-panel/page";
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//     <body className={`h-screen overflow-hidden`}>
//     <div className="flex h-[7vh] flex-row justify-center p-3 items-center bg-[rgba(36,41,43,255)] text-gray-300 w-[85vw]
//     ml-[15vw]">
//           <div className="w-[97.2%] flex justify-center">
//             <SearchBar/> {/* Custom search bar */}
//           </div>
//
//     </div>
//     <div className="flex flex-1 h-full bg-[rgba(36,41,43,255)] ">
//       <button
//           className="text-3xl"
//       >&#9776;</button>
//       {/* Sidebar */}
//       <div
//           // className={`flex justify-center transition-all duration-300 text-gray-300 h-1/2 ${
//           //     isSidebarOpen ? 'w-[4%]' : 'w-0'
//           // } `}
//           className={``}
//       >
//         <SideBar/> {/* Custom sidebar */}
//       </div>
//
//       {/* ChatListItem Panel */}
//       <div
//           // className="w-[26%] bg-[rgba(32,32,33,255)] h-full rounded-tl-lg"
//           className="w-[30%] bg-[rgba(32,32,33,255)] h-full rounded-tl-lg"
//       >
//         <ChatPanelPage/> {/* Custom chat panel */}
//       </div>
//
//       {/* Main Page Content */}
//       <div
//           className="w-[70%] h-full p-6 text-gray-300 bg-[rgba(31,31,31,255)] border-t-[1px] border-l-[1px] border-gray-700">
//         {children} {/* Page-specific content */}
//       </div>
//     </div>
//     </body>
//     </html>
//   );
// }
