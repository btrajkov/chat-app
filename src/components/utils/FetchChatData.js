"use client";

import { fetchChat } from "../../app/lib/data";

// Simulated delay for testing
export async function simulateDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Suspense-compatible fetch
export async function fetchChatData(userId) {
  await simulateDelay(1); // Simulate delay for testing
  const chatData = await fetchChat(userId);
  if (!chatData) throw new Error("Failed to load chat data");
  return chatData;
}
