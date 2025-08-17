/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  safelist: [
    {
      pattern: /(bg|text)-(blue|green|yellow|red|purple|teal|gray|pink)-500/,
      variants: ['hover', '/10'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}