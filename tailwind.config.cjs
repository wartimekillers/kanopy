module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        kanopy: {
          blue: '#4A90E2',
          green: '#7ED6A7'
        }
      },
      backgroundImage: {
        'kanopy-gradient': 'linear-gradient(90deg, #4A90E2 0%, #7ED6A7 100%)'
      }
    }
  },
  plugins: [],
}