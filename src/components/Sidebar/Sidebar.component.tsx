import React from 'react'
import { Container, Profile, Image, Footer, Strong, Span } from '.'
import { PencilLine } from 'phosphor-react'
import Avatar from '../Avatar/Avatar.component'

export function Sidebar() {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />

      <Profile>
        <Avatar
          src="https://avatars.githubusercontent.com/u/49285794?v=4"
          hasBorder={true}
        />
        <Strong>Alexandre Jareck</Strong>
        <Span>Full Stack</Span>
      </Profile>

      <Footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </Footer>
    </Container>
  )
}
