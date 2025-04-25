// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',  // Adjust paths as per your project structure
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'job-card-gradient': 'linear-gradient(to right, #6EE7B7, #3B82F6)', // Green to Blue gradient
      },
      // New Spacing Values
      spacing: {
        72: '18rem', // Custom spacing (e.g., 18rem = 288px)
        80: '20rem', // Custom spacing (e.g., 20rem = 320px)
        96: '24rem', // Another custom spacing value (e.g., 24rem = 384px)
      },
      // Box Shadow Effect
      boxShadow: {
        'job-card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // Soft shadow
        'job-card-hover': '0 4px 10px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
      },
      colors: {
        'custom-light': '#f7fafc', // Light mode background
        'custom-dark': '#2d3748',  // Dark mode background
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
