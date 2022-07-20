import React from 'react'
import { Strong, Container } from './Header.styles'
import logo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  )
}
