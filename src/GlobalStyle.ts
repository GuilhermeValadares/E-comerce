import { createGlobalStyle } from 'styled-components';

const fontWeights = {
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
};

const fontFaces = Object.entries(fontWeights)
  .map(
    ([name, weight]) => `
  @font-face {
    font-family: 'PlusJakartaSans-${name}';
    src: url('/fonts/PlusJakartaSans-${name}.woff2') format('woff2');
    font-weight: ${weight};
    font-style: normal;
    font-display: swap;
  }`
  )
  .join('\n');

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PlusJakartaSans-Regular', sans-serif;
  }
`;

export default GlobalStyle;
