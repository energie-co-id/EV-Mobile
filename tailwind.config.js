// const { plugin } = require('twrnc');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.8125rem',
      base: '0.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '3rem',
      '8xl': '4rem',
      '9xl': '6rem',
      '10xl': '8rem'
    },
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px'
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      colors: {
        gray: colors.slate
      },
      flex: {
        0: '0 0 auto'
      },
      fontFamily: {
        sans: `"Inter var", ${defaultTheme.fontFamily.sans.join(',')}`,
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`
      },
      opacity: {
        12: '0.12',
        38: '0.38',
        87: '0.87'
      },
      rotate: {
        '-270': '270deg',
        15: '15deg',
        30: '30deg',
        60: '60deg',
        270: '270deg'
      },
      scale: {
        '-1': '-1'
      },
      zIndex: {
        '-1': -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999
      },
      lineHeight: {
        12: '3rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        50: '12.5rem',
        90: '22.5rem'
      },
      spacing: {
        12: '3rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        50: '12.5rem',
        90: '22.5rem',

        // Bigger values
        100: '25rem',
        120: '30rem',
        128: '32rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        192: '48rem',
        200: '50rem',
        240: '60rem',
        256: '64rem',
        280: '70rem',
        320: '80rem',
        360: '90rem',
        400: '100rem',
        480: '120rem',
        600: '150rem',
        650: '172rem',
        700: '173rem',
        800: '200rem',

        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%'
      },
      minHeight: ({ theme }) => ({
        ...theme('spacing')
      }),
      maxHeight: {
        none: 'none'
      },
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
        screen: '100vw'
      }),
      maxWidth: ({ theme }) => ({
        ...theme('spacing'),
        screen: '100vw'
      }),
      transitionDuration: {
        400: '400ms'
      },
      transitionTimingFunction: {
        drawer: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
      },

      // @tailwindcss/typography
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: 'var(--fuse-text-default)',
            '[class~="lead"]': {
              color: 'var(--fuse-text-secondary)'
            },
            a: {
              color: 'var(--fuse-primary-500)'
            },
            strong: {
              color: 'var(--fuse-text-default)'
            },
            'ol > li::before': {
              color: 'var(--fuse-text-secondary)'
            },
            'ul > li::before': {
              backgroundColor: 'var(--fuse-text-hint)'
            },
            hr: {
              borderColor: 'var(--fuse-border)'
            },
            blockquote: {
              color: 'var(--fuse-text-default)',
              borderLeftColor: 'var(--fuse-border)'
            },
            h1: {
              color: 'var(--fuse-text-default)'
            },
            h2: {
              color: 'var(--fuse-text-default)'
            },
            h3: {
              color: 'var(--fuse-text-default)'
            },
            h4: {
              color: 'var(--fuse-text-default)'
            },
            'figure figcaption': {
              color: 'var(--fuse-text-secondary)'
            },
            code: {
              color: 'var(--fuse-text-default)',
              fontWeight: '500'
            },
            'a code': {
              color: 'var(--fuse-primary)'
            },
            pre: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.gray.800')
            },
            thead: {
              color: 'var(--fuse-text-default)',
              borderBottomColor: 'var(--fuse-border)'
            },
            'tbody tr': {
              borderBottomColor: 'var(--fuse-border)'
            },
            'ol[type="A" s]': false,
            'ol[type="a" s]': false,
            'ol[type="I" s]': false,
            'ol[type="i" s]': false
          }
        },
        sm: {
          css: {
            code: {
              fontSize: '1em'
            },
            pre: {
              fontSize: '1em'
            },
            table: {
              fontSize: '1em'
            }
          }
        }
      })
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        btn: {
          padding: 3,
          borderRadius: 10,
          textTransform: `uppercase`,
          backgroundColor: `#333`,
        },
        'resize-repeat': {
          resizeMode: `repeat`,
        },
      });
    }),
  ]
};
