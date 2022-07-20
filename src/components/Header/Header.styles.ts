import styled, { css } from 'styled-components'

export const Strong = styled.strong`
  ${({ theme }) => css``}
`
export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.gray800};
    display: flex;
    justify-content: center;
    padding: 1.25rem 0;

    img {
      height: 2rem;
    }
  `}
`
