/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '460px',
        '2xl': '1240px',
      },
      colors: {
        muted: '#707070',
        black: '#121212',
        primary: '#F37017',
        secondary: '#252525',
        gray: '#fafafa',
      },
      maxWidth: {
        50: '50px',
        140: '140px',
        300: '300px',
        400: '400px',
        450: '450px',
        700: '700px',
      },
      maxHeight: {
        50: '50px',
      },
      lineHeight: {
        34: '34px',
        42: '42px',
        55: '55px',
        60: '60px',
        80: '80px',
      },
      spacing: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        25: '25px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        35: '35px',
        36: '36px',
        40: '40px',
        42: '42px',
        44: '44px',
        45: '45px',
        46: '46px',
        48: '48px',
        50: '50px',
        52: '52px',
        54: '54px',
        55: '55px',
        60: '60px',
        64: '64px',
        68: '68px',
        70: '70px',
        72: '72px',
        76: '76px',
        80: '80px',
        84: '84px',
        99: '99px',
        100: '100px',
        110: '110px',
        120: '120px',
        136: '136px',
        146: '146px',
        160: '160px',
        162: '162px',
        180: '180px',
        220: '220px',
        300: '300px',
        333: '333px',
        400: '400px',
        420: '420px',

        '10/9': '10/9',
      },
      fontSize: {
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        25: '25px',
        26: '26px',
        30: '30px',
        '2xl': '40px',
        'xl': '36px',
        'lg': '26px',
        'md': '20px',
        'sm': '18px',
        'xs': '16px',
        '2xs': '14px'
      },
      boxShadow: {
        'card': '0px 4px 64px rgba(0, 0, 0, 0.25)',
        'light': '0px 10px 50px rgba(1, 13, 130, 0.12)',
      }
    },
  },
  plugins: [],
}
