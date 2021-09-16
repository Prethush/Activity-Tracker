module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        30: "0 1 30%",
        70: "0 1 70%",
        10: "0 1 9%"
      },
      colors: {
        custom: "rgb(239,245,251)",
        monthColor: "rgb(255,99,71)",
        textColor: "rgb(74,74,74)"
      },
      boxShadow: {
        custom: "0px 0px 10px 2px rgba(0, 0, 0, .2)"
      },
      width: {
        custom: "20rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
