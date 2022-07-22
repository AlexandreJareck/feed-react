import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.gray800};
    border-radius: 8px;
    padding: 2.5rem;
    + article {
      margin-top: 2rem;
    }
  `}
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
export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${theme.colors.gray600};
  `}

  :focus-within footer {
    visibility: visible;
    max-width: none;
    display: initial;
  }
`
export const Strong = styled.strong`
  ${({ theme }) => css`
    line-height: 1.6;
    color: ${theme.colors.gray100};
  `}
`
export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.gray900};
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: ${theme.colors.gray100};
    line-height: 1.4;
    margin-top: 1rem;
  `}
`
export const Button = styled.footer`
  ${({ theme }) => css`
    visibility: hidden;
    max-width: 0;
    display: none;

    button {
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      border-radius: 8px;
      border: 0;
      background: ${theme.colors.green500};
      color: ${theme.colors.white};
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;

      :hover {
        background: ${theme.colors.green300};
      }
    }
  `}
`
export const CommentList = styled.div`
  margin-top: 2rem;
`
