/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text)-(blue|green|yellow|red|purple|teal|gray|pink)-500/,
      variants: ['hover', '/10'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        'readex': ['Readex Pro', 'sans-serif'],
        'sans': ['Readex Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // ... existing colors ...
      },
    },
  },
  plugins: [],
}