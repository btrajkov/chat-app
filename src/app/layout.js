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
      <body className={`h-screen w-screen overflow-hidden`}>
        <ThemeProvider />
        {/*<SearchBar />*/}
        <div className="bg-bg_sidebar">
          <SideBar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
