/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkorange: "#fa8302",
        black: "#000",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        sandybrown: "#f99f3f",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        belgrano: "Belgrano",
        angkor: "Angkor",
        castoro: "Castoro",
        bayon: "Bayon",
        graduate: "Graduate",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mid: "17px",
      xl: "20px",
      mini: "15px",
      "11xl": "30px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
