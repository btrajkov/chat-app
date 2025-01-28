/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Use CSS variables for flexibility
        autofillBg: "transparent", // Or any desired background color
        bg_search: "var(--bg_search)",
        bg_sidebar: "var(--bg_sidebar)",
        bg_actionbar: "var(--bg_actionbar)",
        bg_toolbar: "var(--bg_toolbar)",
        bg_children: "var(--bg_children)",
        active_text: "var(--active_text)",
        inactive_text: "var(--inactive_text)",
        incoming_message: "var(--chat_incoming)",
        outgoing_message: "var(--chat_outgoing)",
        chat_border: "var(--chat_border)",
        active_chat: "var(--active_chat)",
        purple_color: "var(--purple_color)",
        purple_color_active: "var(--purple_color_active)",
      },
      screens: {
        "home-md": "1200px",
      },
    },
  },
  plugins: [],
};
