/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				mainPink:"#FE81A2",
			},
      fontFamily: {
        alumniSans: ['Alumni Sans', 'sans-serif'],
        bebasNeue : ['Bebas Neue', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        josefinSans: ['Josefin Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

