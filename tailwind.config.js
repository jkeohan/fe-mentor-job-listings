/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        // didn't pass accessibility contrast ratio
        // 'desaturated-dark-cyan': '#5ba4a4',
        'desaturated-dark-cyan': '#026b6b',
        'light-grayish-cyan-background': '#effafa',
        // didn't pass accessibility contrast ratio
        //  'dark-grayish-cyan': '#7b8e8e',#026b6b' #024f4f
        'dark-grayish-cyan': '#024f4f'
      }
    }
  },
  plugins: []
};
