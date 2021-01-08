module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        light: "0.5px",
      },
      colors: {
        blue: {
          light: "#3C47E9",
          DEFAULT: "#1E213A",
          dark: "#100E1D",
        },
        gray: {
          DEFAULT: "#E7E7EB",
          dark: "#A09FB1",
          darker: "#6E707A",
        },
        yellow: {
          DEFAULT: "#FFEC65",
        },
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      fontSize: {
        normal: "1.6rem",
        md: "1.8rem",
        lg: "2.4rem",
        "2xl": "3.6rem",
        "3xl": "4.8rem",
        "4xl": "6rem",
        "10xl": "14.5rem",
      },
      padding: {
        "small-container": "50px",
        container: "150px",
      },
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    extend: {},
  },
  plugins: [],
};
