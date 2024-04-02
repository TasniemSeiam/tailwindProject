/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body:"#181F2B",
        primaryColor:"#60DFD3",
      },
      keyframes:{
        moveToR:{
          '0%':{transform:"translateX(0)"},
          '50%':{transform:"translateX(3px)"},
          '100%':{transform:"translateX(0)"},
        },
      },
      animation: {
        "moveToR": "moveToR 1s ease-in-out infinite"
      },
      screens:{
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        "2xl":"1400px",
      },
    },
  },
  plugins: [],
}

