import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'
import { themeProps } from './theme'

type GlobalStylesProps = {
  theme?: DefaultTheme
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
         url('../fonts/poppins-v15-latin-300.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
         url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
         url('../fonts/poppins-v15-latin-600.woff2') format('woff2'),
  }
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;      
    }
  
    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        background-color: ${theme.colors.gray900};
        color: ${theme.colors.white};
        -webkit-font-smoothing: antialiased;
      }

      @media (max-width: 1080px) {
        html {
          font-size: 93.75%;
        }
      }

      @media (max-width: 720px) {
        html {
          font-size: 87.5%;
        }
      }

      body,
      input,
      textarea,
      button {
        font-family: ${theme.font.family};
        font-weight: 400;
        font-size: 1rem;
      }

      button {
        cursor: pointer;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  `

export default GlobalStyles
