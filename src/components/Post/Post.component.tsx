import React from 'react'
import { Container, Header, Author, Avatar, AuthorInfo, Content } from '.'

export function Post() {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar src="https://avatars.githubusercontent.com/u/49285794?v=4" />
          <AuthorInfo>
            <strong>Alexandre Jareck</strong>
            <span>Fullstack</span>
          </AuthorInfo>
        </Author>
        <time title="11 de maio as oito e doze" dateTime="2022-05-11 08:12:00">
          Publicado há 1h
        </time>
      </Header>
      <Content>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat </a>
        </p>
      </Content>
    </Container>
  )
}
