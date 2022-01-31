const plugin = require('tailwindcss/plugin');

const DEFAULT_SETTINGS = {};
const DEFAULT_VALUES = {};
const DEFAULT_VARIANTS = ['serif', 'sans'];

const round = (num) =>
  num
    .toFixed(2)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = plugin(
  function ({addBase, theme, variants, e}) {
    addBase({
      'h1': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: theme('fontSize.4xl'),
        fontWeight: '500',
        lineHeight: round(36 / 30),
      },
      '* + h1': {
        marginTop: em(24, 30),
      },
      'h1 + *': {
        marginTop: em(16, 20),
      },
      'h2': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: theme('fontSize.2xl'),
        fontWeight: '500',
        lineHeight: round(28 / 20),
      },
      '* + h2': {
        marginTop: em(32, 20),
      },
      'h2 + *': {
        marginTop: em(16, 20),
      },
      'h3': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: theme('fontSize.xl'),
        fontWeight: '400',
        fontStyle: 'italic',
        lineHeight: round(28 / 18),
      },
      '* + h3': {
        marginTop: em(28, 18),
      },
      'h3 + *': {
        marginTop: em(12, 18),        
      },
      'h4': {
        fontSize: theme('fontSize.lg'),
        fontWeight: '600',
        lineHeight: round(20 / 14),
      },
      '* + h4': {
        marginTop: em(20, 14),
      },
      'h4 + *': {
        marginTop: em(4, 16),
      },
      'h1 + h2': {
        marginTop: em(16, 20),
      },
      'h2 + h3': {
        marginTop: '0',
      },
      pre: {
        fontSize: em(14, 16),
        lineHeight: round(24 / 14),
        marginTop: em(24, 14),
        marginBottom: em(24, 14),
        borderRadius: rem(6),
        paddingTop: em(12, 14),
        paddingRight: em(16, 14),
        paddingBottom: em(12, 14),
        paddingLeft: em(16, 14),
      },
      'article': {
        maxWidth: '65ch',
      },
      'p + *': {
        marginTop: em(20, 16),
      },
      'main': {
        fontSize: theme('fontSize.base'),
      },
      'main a': {
        textDecoration: 'underline',
      },
      'main a.btn': {
        textDecoration: 'none',
      },
      'main ol': {
        marginTop: em(20, 16),
        marginBottom: em(20, 16),
      },
      'main ul': {
        marginTop: em(20, 16),
        marginBottom: em(20, 16),
        paddingLeft: em(26, 16),
        listStyleType: 'disc',
      },
      'main li': {
        marginTop: em(8, 16),
        marginBottom: em(8, 16),
      },
      'main ol': {
        paddingLeft: em(26, 16),
        listStyleType: 'decimal',
      },
      'main ol > li': {
        paddingLeft: em(6, 16),
      },
      'main ul > li': {
        paddingLeft: em(6, 16),
      },
      'main * > ul > li p': {
        marginTop: em(12, 16),
        marginBottom: em(12, 16),
      },
      'main * > ul > li > *:first-child': {
        marginTop: em(20, 16),
      },
      'main * > ul > li > *:last-child': {
        marginBottom: em(20, 16),
      },
      'main * > ol > li > *:first-child': {
        marginTop: em(20, 16),
      },
      'main * > ol > li > *:last-child': {
        marginBottom: em(20, 16),
      },
      'main ul ul, main ul ol, main ol ul, main ol ol': {
        marginTop: em(12, 16),
        marginBottom: em(12, 16),
      },
      'main ol[type="A"]': {
        listStyleType: 'upper-alpha',
      },
      'main ol[type="a"]': {
        listStyleType: 'lower-alpha',
      },
      'main ol[type="A" s]': {
        listStyleType: 'upper-alpha',
      },
      'main ol[type="a" s]': {
        listStyleType: 'lower-alpha',
      },
      'main ol[type="I"]': {
        listStyleType: 'upper-roman',
      },
      'main ol[type="i"]': {
        listStyleType: 'lower-roman',
      },
      'main ol[type="I" s]': {
        listStyleType: 'upper-roman',
      },
      'main ol[type="i" s]': {
        listStyleType: 'lower-roman',
      },
      'main ol[type="1"]': {
        listStyleType: 'decimal',
      },
      'main hr': {
        marginTop: em(48, 16),
        marginBottom: em(48, 16),
      },
      'main hr + *': {
        marginTop: '0',
      },
      'main table': {
        fontSize: em(14, 16),
        lineHeight: round(24 / 14),
      },
      'main thead th': {
        paddingRight: em(8, 14),
        paddingBottom: em(8, 14),
        paddingLeft: em(8, 14),
      },
      'main thead th:first-child': {
        paddingLeft: '0',
      },
      'main thead th:last-child': {
        paddingRight: '0',
      },
      'main tbody td': {
        paddingTop: em(8, 14),
        paddingRight: em(8, 14),
        paddingBottom: em(8, 14),
        paddingLeft: em(8, 14),
      },
      'main tbody td:first-child': {
        paddingLeft: '0',
      },
      'main tbody td:last-child': {
        paddingRight: '0',
      },
    });
  }, {
  }
);
