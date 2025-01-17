module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002968',
          bg: 'rgba(0, 41, 104, 0.06)',
        },
        category_border: '#EBEBEB',
      },
      screens: {
        mobile: '360px',
        desktop: '769px',
      },
      fontSize: {
        body1: ['12px', { lineHeight: '24px', fontWeight: '400' }],
        body2: ['12px', { lineHeight: '24px', fontWeight: '500' }],
        body3: ['16px', { fontWeight: '500' }],
        title: ['16px', { fontWeight: '700' }],
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      keyframes: {
        fadein: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeout: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
      },
      animation: {
        fadein: 'fadein 0.25s',
        fadeout: 'fadeout 0.25s',
        slideUp: 'slideUp 0.25s ease-out',
        slideDown: 'slideDown 0.25s ease-out',
      },
    },
  },
};
