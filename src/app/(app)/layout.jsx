import "../ui/globals.css";
import { SearchBar } from "@/components/Navigation/SearchBar";
import { SideBar } from "@/components/Navigation/SideBar";
import ChatPanelPage from "@/app/(app)/chats [Deprecated]/page";
import "../globals.css";
import ThemeProvider from "@/components/utils/ThemeProvider";
import { SideBarWorkVersion } from "@/components/Navigation/SideBarWorkVersion";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the viewport meta tag for safe area support */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={`h-screen w-screen overflow-hidden home-md:flex`}>
        {/*<ThemeProvider /> Turn this on for color modes*/}
        {/*<Navigations /> for mobile*/}
        <div className="bg-bg_sidebar home-md:hidden home-md:w-screen">
          <SideBarWorkVersion />
        </div>
        {/*<Navigations /> for desktop*/}
        <div className="home-md:h-screen home-md:flex home-md:flex-col">
          <div
            className="hidden home-md:h-[7vh] home-md:w-screen
          home-md:flex home-md:justify-end home-md:items-center
          home-md:pr-10"
          >
            <div
              className="hidden home-md:h-[7vh] home-md:w-screen
          home-md:flex home-md:justify-end home-md:items-center
          home-md:pr-10"
            >
              <SearchBar />
            </div>
          </div>
          <div className="home-md:flex home-md:w-full">
            <div className="hidden home-md:flex h-[93vh] home-md:w-[5vw]">
              <SideBarWorkVersion />
            </div>
            <div className={"home-md:w-[95vw]"}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
