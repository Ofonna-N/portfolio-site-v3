/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#f2f2f2",
        "primary-100": "#d9d9d9",
        "primary-200": "#bfbfbf",
        "primary-300": "#a6a6a6",
        "primary-400": "#8c8c8c",
        "primary-500": "#737373",
        "primary-600": "#595959",
        "primary-700": "#404040",
        "primary-800": "#262626",
        "primary-900": "#0d0d0d",
        // "accent-50": "var(--accent-50)",
        // "accent-100": "var(--accent-100)",
        // "accent-200": "var(--accent-200)",
        // "accent-300": "var(--accent-300)",
        // "accent-400": "var(--accent-400)",
        // "accent-500": "var(--accent-500)",
        // "accent-600": "var(--accent-600)",
        // "accent-700": "var(--accent-700)",
        // "accent-800": "var(--accent-800)",
        // "accent-900": "var(--accent-900)",
      },
    },
  },
  plugins: [],
};
