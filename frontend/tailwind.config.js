/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        civora: {
          primary: '#1e40af',
          secondary: '#3b82f6',
          accent: '#60a5fa',
          dark: '#1e293b',
          light: '#f8fafc',
        }
      },
    },
  },
  plugins: [],
}
