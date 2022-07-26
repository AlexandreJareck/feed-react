import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'
import { Container, Box, Content, Footer, Header, Author } from '.'

export function Comment() {
  return (
    <Container>
      <img src="https://avatars.githubusercontent.com/u/49285794?v=4" alt="" />
      <Box>
        <Content>
          <Header>
            <Author>
              <strong>Alexandre Jareck</strong>
              <time
                title="11 de maio as oito e doze"
                dateTime="2022-05-11 08:12:00"
              >
                Cerda de 2h atrás
              </time>
            </Author>
            <button title="Deletar comentários">
              <Trash size={24} />
            </button>
          </Header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </Content>

        <Footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </Footer>
      </Box>
    </Container>
  )
}
