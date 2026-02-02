/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'clash-red': '#E74C3C',
        'clash-dark': '#1a1a1a',
        'clash-darker': '#0f0f0f',
        'clash-light': '#f5f5f5'
      }
    }
  },
  plugins: []
};