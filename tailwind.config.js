module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002968',
          egg: 'rgba(0, 41, 104, 0.06)',
        },
        category_border: '#D7D7DA',
      },
      screens: {
        mobile: '360px',
        desktop: '769px',
      },
      fontSize: {
        headline: ['16px', { lineHeight: '140%', fontWeight: '600', letterSpacing: '0%' }],
        body: ['14px', { lineHeight: '150%', fontWeight: '400', letterSpacing: '-1.5%' }],
        label: ['12px', { lineHeight: '150%', fontWeight: '500', letterSpacing: '1.5%' }],
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
};
