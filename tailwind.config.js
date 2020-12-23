module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          '50': '#55BF71',
          '100': '#e3ffeb',
          '200': '#c9ffd8',
          '300': '#a6f0b9',
          '400': '#7fd696',
          '500': '#70bd84',
          '600': '#61a372',
          '700': '#528a61',
          '800': '#43704f',
          '900': '#33573d',
        },
        coral: {
          '1': '#FF8272',
          '2': '#FFB872',
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        md: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },


    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
