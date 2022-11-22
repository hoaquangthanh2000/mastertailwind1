/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
],
  theme: {
    extend: {
      fontFamily:{
        Averta:['" Averta,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif "']
      },
      boxShadow: {
        'money': '0.25em 0.5em 3em rgb(255 213 48 / 80%)',
      },
      backgroundImage: {
        'home': "url('../public/image/Rectangle 2.png')",
      }
    },
    screens: {
			sm: { max: "414px" },
			// => @media (max-width: 639px) { ... },
      lg: {min:"1024px"}
		},
  },
  plugins: [],
}
