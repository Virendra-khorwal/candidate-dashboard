/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-color': '#0d1011',
      'secondary-color': '#161819',

      'light-gray': '#8d8f8f',
      'dark-gray': '#252728',
      'red': '#ff5f52',
      'white': '#fff',
      'green': '#2cff8d',
      'yellow': '#f69b2f'
    }

    // #161819
// #0d1011
// #252728
// #8d8f8f
// #ff5f52
  },
  plugins: [],
}