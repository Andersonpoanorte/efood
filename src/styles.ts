import { createGlobalStyle } from 'styled-components'

export const cores = {
  fundoPrincipal: '#fff8f2',
  vermelhorClaro: '#e66767',
  begeClaro: '#ffeBd9',
  branco: '#ffffff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.fundoPrincipal};
  color: ${cores.vermelhorClaro};
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
}
`
