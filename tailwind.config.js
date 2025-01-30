module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002968',
          egg: 'rgba(0, 41, 104, 0.06)',
        },
        category_border: '#EBEBEB',
      },
      screens: {
        mobile: '360px',
        desktop: '769px',
      },
      fontSize: {
        headline: ['16px', { lineHeight: '22.4px', fontWeight: '600' }],
        body: ['14px', { lineHeight: '21px', fontWeight: '400' }],
        label: ['12px', { lineHeight: '18px', fontWeight: '500' }],
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
};
