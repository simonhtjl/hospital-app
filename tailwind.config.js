const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lightblue': '#F3F6FD',
      'white':'#FFFFFF',
      'blue':'#0D63DD',
      'blue2':'#4182DE',
      'silver':'#F1F2F9',
      'black':'#000000',
      'red':'red',
      'green':'#1FDB76'
    },
    fontFamily: {
      sans: [
        'Jost',
        ...defaultTheme.fontFamily.sans,
      ]
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '4px',
      'img': '80px',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {},
  },
  plugins: [],
}
