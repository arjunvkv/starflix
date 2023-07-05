module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-theme": "#171717",
        "main-txt": "#FFFFFF",
      },
      fontFamily: {
        Titillium: ["Titillium Web", "sans-serif"],
      },
      backgroundImage: {
        "nav-bg-img": "url(https://test.create.diagnal.com/images/nav_bar.png)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
