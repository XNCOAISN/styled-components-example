import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    min-height: 100vh;
    line-height: 1.5;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  body {
    ${({ theme }) =>
      theme.colorScheme === "dark"
        ? css`
            color: #fff;
            background-color: #121212;
          `
        : css`
            color: rgba(0, 0, 0, 0.87);
            background-color: rgba(0, 0, 0, 0.12);
          `}
  }
`;
