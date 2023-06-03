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
        "primary-50": "var(--primary-50)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
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
