/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#C5E4E8",
        "custom-bill-green": "#5F6969",
        "custom-input-field-green": "#F3F9FB",
        "custom-tip-percent-button": "#00474B",
        "custom-per-person": "#E8FFFF",
        "custom-amount-color": "#28C2AD",
        "active-button-custom-color": "#9FE8DF",
        "reset-text-color": "#004140",
      },
      height: {
        "21rem": "21rem", // Add custom height
      },
    },
  },
  plugins: [],
};
