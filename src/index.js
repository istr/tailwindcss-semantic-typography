import plugin from 'tailwindcss/plugin';

const round = (num) =>
  num
    .toFixed(2)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

export default plugin(
  ({addBase}) => addBase({
    'h1': {
      fontFamily: 'var(--font-heading, --font-serif)',
      fontFeatureSettings: 'var(--font-heading--font-feature-settings, normal)',
      fontSize: 'var(--text-4xl, inherit)',
      fontWeight: '501',
      lineHeight: round(36 / 30),
      marginTop: em(24, 30),
    },
    'h1 + *': {
      marginTop: em(16, 20),
    },
    'h2': {
      fontFamily: 'var(--font-heading, --font-serif)',
      fontFeatureSettings: 'var(--font-heading--font-feature-settings, normal)',
      fontSize: 'var(--text-2xl, inherit)',
      fontWeight: '500',
      lineHeight: round(28 / 20),
      marginTop: em(32, 20),
    },
    'h2 + *': {
      marginTop: em(16, 20),
    },
    'h3': {
      fontFamily: 'var(--font-heading, --font-serif)',
      fontFeatureSettings: 'var(--font-heading--font-feature-settings, normal)',
      fontSize: 'var(--text-xl, inherit)',
      fontWeight: '400',
      fontStyle: 'italic',
      lineHeight: round(28 / 18),
      marginTop: em(28, 18),
    },
    'h3 + *': {
      marginTop: em(12, 18),
    },
    'h4': {
      fontSize: 'var(--text-lg, inherit)',
      fontWeight: '600',
      lineHeight: round(20 / 14),
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
    'main': {
      fontSize: 'var(--text-base, inherit)',
    },
    'p + *': {
      marginTop: em(20, 16),
    },
    'article': {
      fontFamily: 'var(--font-bodytext, --font-sans)',
      fontSize: 'var(--font-bodytext--size, --text-base)',
      fontFeatureSettings: 'var(--font-bodytext--feature-settings, normal)',
      maxWidth: 'var(--font-bodytext--max-width, 32em)',
    },
    'article p': {
      hyphens: 'auto',
      lineHeight: 1.7,
      textAlign: 'justify'
    },
    'main a': {
      textDecoration: 'underline',
      textDecorationThickness: '1px',
    },
    'main h1 a': {
      textDecoration: 'none',
    },
    'main h2 a': {
      textDecoration: 'none',
    },
    'main h3 a': {
      textDecoration: 'none',
    },
    'main h4 a': {
      textDecoration: 'none',
    },
    'main a.btn': {
      textDecoration: 'none',
    },
    'article ol': {
      marginTop: em(20, 16),
      marginBottom: em(20, 16),
    },
    'article ul': {
      marginTop: em(20, 16),
      marginBottom: em(20, 16),
      paddingLeft: em(26, 16),
      listStyleType: 'disc',
    },
    'article li': {
      marginTop: em(8, 16),
      marginBottom: em(8, 16),
    },
    'article ol': {
      paddingLeft: em(26, 16),
      listStyleType: 'decimal',
    },
    'article ol > li': {
      paddingLeft: em(6, 16),
    },
    'article ul > li': {
      paddingLeft: em(6, 16),
    },
    'article * > ul > li p': {
      marginTop: em(12, 16),
      marginBottom: em(12, 16),
    },
    'article * > ul > li > *:first-child': {
      marginTop: em(20, 16),
    },
    'article * > ul > li > *:last-child': {
      marginBottom: em(20, 16),
    },
    'article * > ol > li > *:first-child': {
      marginTop: em(20, 16),
    },
    'article * > ol > li > *:last-child': {
      marginBottom: em(20, 16),
    },
    'article ul ul, article ul ol, article ol ul, article ol ol': {
      marginTop: em(12, 16),
      marginBottom: em(12, 16),
    },
    'article ol[type="A"]': {
      listStyleType: 'upper-alpha',
    },
    'article ol[type="a"]': {
      listStyleType: 'lower-alpha',
    },
    'article ol[type="A" s]': {
      listStyleType: 'upper-alpha',
    },
    'article ol[type="a" s]': {
      listStyleType: 'lower-alpha',
    },
    'article ol[type="I"]': {
      listStyleType: 'upper-roman',
    },
    'article ol[type="i"]': {
      listStyleType: 'lower-roman',
    },
    'article ol[type="I" s]': {
      listStyleType: 'upper-roman',
    },
    'article ol[type="i" s]': {
      listStyleType: 'lower-roman',
    },
    'article ol[type="1"]': {
      listStyleType: 'decimal',
    },
    'article hr': {
      marginTop: em(48, 16),
      marginBottom: em(48, 16),
    },
    'article hr + *': {
      marginTop: '0',
    },
    'article table': {
      fontSize: em(14, 16),
      lineHeight: round(24 / 14),
    },
    'article thead th': {
      paddingRight: em(8, 14),
      paddingBottom: em(8, 14),
      paddingLeft: em(8, 14),
    },
    'article thead th:first-child': {
      paddingLeft: '0',
    },
    'article thead th:last-child': {
      paddingRight: '0',
    },
    'article tbody td': {
      paddingTop: em(8, 14),
      paddingRight: em(8, 14),
      paddingBottom: em(8, 14),
      paddingLeft: em(8, 14),
    },
    'article tbody td:first-child': {
      paddingLeft: '0',
    },
    'article tbody td:last-child': {
      paddingRight: '0',
    },
  }), {}
);
