import styled, { css, DefaultTheme } from 'styled-components'
import { AvatarProps } from '.'

function borderModifier(theme: DefaultTheme) {
  return css`
    border: 4px solid ${theme.colors.gray800};
    outline: 2px solid ${theme.colors.green500};
  `
}

export const Container = styled.img<AvatarProps>`
  ${({ theme, hasBorder }) => css`
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    ${hasBorder && borderModifier(theme)}
  `}
`
