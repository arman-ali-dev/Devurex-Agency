// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        background: "var(--bg-color)",
      },
    },
  },
  plugins: [],
};
