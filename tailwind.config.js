module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#181818",
        glass: "#12121300",
      },
      fontFamily: {
        JetBrain: ["'JetBrains Mono'", "sans-serif"],
      },
      backgroundSize: {
        hero: "320px",
      },
    },
  },
  plugins: [],
};
