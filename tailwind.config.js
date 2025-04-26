module.exports = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'job-card-gradient': 'linear-gradient(to right, #6EE7B7, #3B82F6)',
      },
      colors: {
        'custom-light': '#f7fafc',
        'custom-dark': '#2d3748',
      },
      spacing: {
        72: '18rem',
        80: '20rem', 
        96: '24rem', 
      },
      boxShadow: {
        'job-card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'job-card-hover': '0 4px 10px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'custom-light': '#f7fafc',
        'custom-dark': '#2d3748',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
