/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
      serif: ["IBM Plex Serif", "ui-serif"],
      mono: ["IBM Plex Mono", "ui-monospace"],
    },
    extend: {},
  },
  plugins: [],
}
