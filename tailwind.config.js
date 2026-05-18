/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lilac: '#cdb4db',
        peach: '#ffc8dd',
        pink: '#ffafcc',
        baby: '#bde0fe',
        sky: '#a2d2ff',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(205, 180, 219, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(255, 192, 221, 0.12), transparent 25%)',
      },
    },
  },
  plugins: [],
};
