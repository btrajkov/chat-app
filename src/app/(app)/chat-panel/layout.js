"use client";

import React, { useState, useEffect, useLayoutEffect, Suspense } from "react";
import ChatList from "@/components/Chat/ChatList";
import ChatPage from "@/app/(app)/chat-panel/[chatId]/page";
import { useMobileView } from "@/app/hooks/useMobileView";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider, useChannel } from "ably/react";

const ChatPanelPage = () => {
  const isMobileView = useMobileView(); // Always call hooks
  const [showChatPageMobile, setShowChatPageMobile] = useState(false);
  const client = new Ably.Realtime({ authUrl: "/api/chat-auth" });

  useLayoutEffect(() => {
    setShowChatPageMobile(false);
  }, []);

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="chat-demo">
        <div className="flex w-full h-full">
          {!isMobileView ? (
            <>
              <div className="h-full w-[380px] bg-bg_actionbar flex-shrink-0 rounded-t-2xl md:rounded-tl-xl md:rounded-tr-[0px]">
                <Suspense
                  fallback={
                    <svg
                      class="animate-spin h-5 w-5 mr-3 ..."
                      viewBox="0 0 24 24"
                    ></svg>
                  }
                >
                  <ChatList />
                </Suspense>
              </div>
              <div className="block flex-1">
                <Suspense
                  fallback={
                    <div className="animate-pulse text-gray-500">
                      Loading...
                    </div>
                  }
                >
                  <ChatPage />
                </Suspense>
              </div>
            </>
          ) : (
            <>
              <div
                className={`${showChatPageMobile ? "hidden" : "block h-full w-full"}`}
              >
                <ChatList
                  handleToggleLayoutMobile={() =>
                    setShowChatPageMobile((prev) => !prev)
                  }
                  showChatMobile={showChatPageMobile}
                />
              </div>
              <div
                className={`${showChatPageMobile ? "block flex-1" : "hidden"}`}
              >
                <div className="w-full flex items-center justify-center text-active_text">
                  <ChatPage
                    handleToggleLayoutMobile={() =>
                      setShowChatPageMobile((prev) => !prev)
                    }
                    showChatMobile={showChatPageMobile}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </ChannelProvider>
    </AblyProvider>
  );
};

export default ChatPanelPage;
