import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #1D2527;;
    --secondary: #AFAFAF;
    --tertiary: #D2D4D9;
    --white: #EBEFF2;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body, input, textarea, button {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  a{
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-height: 700px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    @media (max-width: 768px) {
      width: 380px;
      height: 568px;
    }
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
  .banner{
    width: 1350px;
    height: 630px;
    @media (max-width: 768px) {
    width: 395px;
    height: 345.67px;
  }
  }
`;
