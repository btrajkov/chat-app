import { useMobileView } from "@/app/hooks/useMobileView";
import { FaArrowCircleLeft } from "react-icons/fa";

/* Header portion of chat with chat title. When on mobile view there is arrow for going back to chat list
when on desktop view there is just chat name but we will add more features later*/

// For now without real chat name until I figure out the best way to display it

const ChatHeader = ({ showChatMobile, handleToggleLayoutMobile }) => {
  const isMobileView = useMobileView();

  return (
    <div className="h-[50px] bg-bg_actionbar px-4 flex justify-between items-center">
      <h2 className="text-active_text font">{"Chat"}</h2>
      {/*This up was <h2 className="text-active_text font">{chatName || "Chat"}</h2>*/}
      {showChatMobile && isMobileView && (
        <button className="text-2xl" onClick={handleToggleLayoutMobile}>
          <FaArrowCircleLeft />
        </button>
      )}
    </div>
  );
};

export default ChatHeader;
