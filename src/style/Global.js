import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #ff9F0D;
    --seconday-color: #484848;
    --third-color: #FFDFAD;
    --text-color: #717171; 

    --input-bg: #ededed;
  }

  body {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 0.9375rem;
`;
