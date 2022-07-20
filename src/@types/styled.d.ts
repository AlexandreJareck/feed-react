import { themeProps } from '../styles/theme'

type Theme = typeof themeProps

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
