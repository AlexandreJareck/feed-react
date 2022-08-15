import { ThumbsUp, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import { Container, Box, Content, Footer, Header, Author } from '.'
import Avatar from '../Avatar/Avatar.component'

type CommentProps = {
  content: string
  onDeleteComment: (value: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  return (
    <Container>
      <Avatar
        src="https://avatars.githubusercontent.com/u/49285794?v=4"
        alt=""
        hasBorder={false}
      />
      <Box>
        <Content>
          <Header>
            <Author>
              <strong>Alexandre Jareck</strong>
              <time
                title="11 de maio as oito e doze"
                dateTime="2022-05-11 08:12:00"
              >
                Cerca de 2h atrás
              </time>
            </Author>
            <button title="Deletar comentários" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </Header>
          <p>{content}</p>
        </Content>

        <Footer>
          <button
            onClick={() =>
              setLikeCount((state) => {
                return state + 1
              })
            }
          >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </Footer>
      </Box>
    </Container>
  )
}
