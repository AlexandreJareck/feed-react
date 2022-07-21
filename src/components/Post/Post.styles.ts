import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.gray800};
    border-radius: 8px;
    padding: 2.5rem;
  `}

  article + article {
    margin-top: 2rem;
  }
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    time {
      font-size: 0.875rem;
      color: ${theme.colors.gray400};
    }
  `}
`

export const Author = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `}
`

export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    strong {
      display: block;
      color: ${theme.colors.gray100};
      line-height: 1.6;
    }

    span {
      display: block;
      font-size: 0.075em;
      color: ${theme.colors.gray400};
      line-height: 1.6;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    line-height: 1.6;
    color: ${theme.colors.gray300};
    margin-top: 1.5rem;

    p {
      margin-top: 1rem;
    }

    a {
      font-weight: bold;
      color: ${theme.colors.green500};
      text-decoration: none;
    }

    a:hover {
      color: ${theme.colors.green300};
    }
  `}
`
