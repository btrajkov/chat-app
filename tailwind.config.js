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
        bg_search: "var(--bg_search)",
        bg_sidebar: "var(--bg_sidebar)",
        bg_actionbar: "var(--bg_actionbar)",
        bg_toolbar: "var(--bg_toolbar)",
        bg_children: "var(--bg_children)",
        active_text: "var(--active_text)",
        inactive_text: "var(--inactive_text)",
      },
    },
  },
  plugins: [],
};
