import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
    }
  `}
`
export const Box = styled.div`
  flex: 1;
`
export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray700};
    border-radius: 8px;
    padding: 1rem;

    header button {
      background: transparent;
      border: 0;
      color: ${theme.colors.gray400};
      cursor: pointer;
      line-height: 0;
      border-radius: 2px;
    }

    header button:hover {
      color: ${theme.colors.red500};
    }

    p {
      margin-top: 1rem;
      color: ${theme.colors.gray300};
    }
  `}
`
export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 1rem;

    button {
      background: transparent;
      border: 0;
      color: ${theme.colors.gray400};
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 2px;

      span:before {
        content: '•';
        padding: 0 0.25rem;
      }
    }

    button:hover {
      color: ${theme.colors.green300};
    }

    svg {
      margin-right: 0.5rem;
    }
  `}
`
export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const Author = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    strong {
      display: block;
      font-size: 0.875rem;
      line-height: 1.6;
    }

    time {
      display: block;
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${theme.colors.gray400};
    }
  `}
`
