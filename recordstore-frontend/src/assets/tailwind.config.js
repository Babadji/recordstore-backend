module.exports = {
  purge: {
    enabled: process.env.TAILWIND_PURGE === 'true',
    content: ['./app/views/**/*', './app/frontend/**/*'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelist: require('./plugins').purgeCssWhitelistedClasses
  },
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.375rem',
      default: '0.625rem',
      full: '9999px'
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)'
    },
    filter: {
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#111',
      white: '#fff',
      gray: {
        50: '#faf9fb',
        100: '#f7f7f7',
        200: '#ebecf2',
        250: '#dfdfdf',
        300: '#b2b2b4',
        400: '#909193',
        500: '#7c7c7e',
        600: '#656669',
        700: '#4C4C4C',
        900: '#24252a'
      },
      green: {
        100: '#f2faf7',
        150: '#f4fffc',
        200: '#a5d5a8',
        300: '#9cf3b0',
        500: '#47ca65',
        900: '#007f61'
      },
      blue: {
        50: '#f2f4fd',
        100: '#ecf1ff',
        200: '#91a5e6',
        300: '#5070d7',
        500: '#1949d9'
      },
      red: {
        100: '#fff9f9',
        300: '#ffd0cd',
        500: '#f54036'
      },
      yellow: {
        500: '#fbc929'
      },
      pink: {
        500: '#d53f8c'
      }
    },
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        sm: '2rem'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    fontSize: {
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.75'],
      lg: ['1.125rem', '1.75'],
      xl: ['1.25rem', '1.3'],
      '2xl': ['1.5rem', '1.25'],
      '3xl': ['2rem', '1.25'],
      '4xl': ['2.625rem', '1.2'],
      '5xl': ['3.125rem', '1.2'],
      '6xl': ['3.75rem', '1.0667'],
      '7xl': ['6.25rem', '1']
    },
    lineHeight: {
      none: '1',
      tight: '1.375',
      normal: '1.75',
      loose: '2'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
      xxl: '1680px'
    },
    extend: {
      boxShadow: theme => ({
        default: '0 5px 60px 0 rgba(14, 68, 26, 0.06)',
        sm: '0 5px 10px 0 rgba(14, 68, 26, 0.06)',
        highlight: `inset 0 -0.55em ${theme('colors.green.300')}`,
        bottom: '0 30px 30px 0 rgba(14, 68, 26, 0.06)',
        top: '10px 0 0 10px rgba(14, 68, 26, 0.03)',
        dark: '0px 5px 40px 0px rgba(46,64,48,0.5)'
      }),
      borderColor: theme => ({
        default: theme('colors.gray.200', 'currentColor')
      }),
      borderWidth: {
        '12': '12px'
      },
      fill: {
        none: 'none'
      },
      zIndex: {
        '5': '5'
      },
      width: {
        '9/10': '90%',
        '9/20': '45%',
        '11/20': '55%',
        '11/10': '110%',
        '80': '20rem',
        '100': '25rem'
      },
      height: {
        '2-px': '2px'
      },
      minHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '24': '6rem',
        '40': '10rem',
        '1/2': '50%',
        full: '100%'
      },
      margin: {
        '-14': '-3.5rem',
        '-18': '-4.5rem'
      },
      maxHeight: {
        'inset-2': 'calc(100vh - 1rem)',
        '56': '28rem',
        'screen-3/4': '75vh'
      },
      maxWidth: {
        '2xs': '15rem',
        '120': '120%'
      },
      minWidth: {
        px: '1px',
        xs: '20rem'
      },
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-4': '-1rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-16': '-4rem',
        '-24': '-6rem',
        '-40': '-10rem',
        '-1/2': '-50%',
        '-full': '-100%',
        '2-px': '2px',
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '24': '6rem',
        '40': '10rem',
        '1/2': '50%',
        full: '100%'
      },
      backgroundSize: () => ({
        '1/2': '50%'
      })
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
    borderColor: ['responsive', 'hover', 'focus', 'checked'],
    borderRadius: ['responsive', 'hover', 'first', 'last'],
    borderWidth: ['responsive', 'hover', 'last'],
    filter: ['responsive', 'hover'],
    textColor: ['responsive', 'hover', 'focus', 'last'],
    fontWeight: ['last']
  },
  plugins: [
    require('tailwindcss-filters'),
    require('./plugins').borderColor,
    require('./plugins').vcloak,
    require('./plugins').stickyPositions
  ]
}
