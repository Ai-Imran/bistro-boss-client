// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text :'blue',
        customBlue: '#1E90FF',
        txcolor: "#CD9003"
      }
    },
  },
  plugins: [require("daisyui")],
};
