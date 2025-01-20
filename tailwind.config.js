/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1', // Rich purple for accents
        dark: {
          DEFAULT: '#000000',   // Pure black background
          50: '#0A0A0A',        // Slightly lighter black for subtle variations
          100: '#1A1A1A',       // Dark gray for contrast
        },
        light: {
          DEFAULT: '#F9FAFB',   // Light text
          50: '#E5E7EB',        // Slightly darker light color
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
