import styled, { css } from 'styled-components'

export const Container = styled.aside`
  ${({ theme }) => css`
    background: ${theme.colors.gray800};
    border-radius: 8px;
    overflow: hidden;
  `}
`
export const Profile = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 1.5rem - 6px);

    span {
    }
  `}
`
export const Image = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`
export const Footer = styled.footer`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray600};
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;

    a {
      background: transparent;
      color: ${theme.colors.green500};
      border: 1px solid ${theme.colors.green500};
      border-radius: 8px;
      height: 50px;
      padding: 0 1.5rem;
      font-weight: bold;
      display: block;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.19rem;

      transition: color 0.2s, background-color 0.2s;
    }

    a:hover {
      background: ${theme.colors.green500};
      color: ${theme.colors.white};
    }
  `}
`
export const Span = styled.span`
  ${({ theme }) => css`
    font-size: 0.875rem;
    color: ${theme.colors.gray400};
  `}
`
export const Strong = styled.strong`
  ${({ theme }) => css`
    margin-top: 1rem;
    color: ${theme.colors.gray100};
    line-height: 1.6;
  `}
`
