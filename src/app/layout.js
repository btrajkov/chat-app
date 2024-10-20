import "./ui/globals.css";
import { SearchBar } from "@/components/Navigation/SearchBar";
import { SideBar } from "@/components/Navigation/SideBar";
import ChatPanelPage from "@/app/chat-panel/page";
import "./globals.css";
import ThemeProvider from "@/components/utils/ThemeProvider";

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
      <body className={`h-screen w-screen overflow-hidden md:flex`}>
        <ThemeProvider />
        {/*<Navigations /> for mobile*/}
        <div className="bg-bg_sidebar md:hidden">
          <SideBar />
        </div>
        {/*<Navigations /> for desktop*/}
        <div className="md:h-screen md:flex md:flex-col">
          <div
            className="hidden md:h-[7vh] md:w-screen
          md:flex md:justify-end md:items-center
          md:pr-10"
          >
            <SearchBar />
          </div>
          <div className="md:flex">
            <div className="hidden md:flex h-[93vh]">
              <SideBar />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
