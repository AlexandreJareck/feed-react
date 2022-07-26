import {
  Container,
  Header,
  Author,
  AuthorInfo,
  Content,
  Form,
  Textarea,
  Strong,
  Button,
  CommentList
} from '.'
import Avatar from '../Avatar/Avatar.component'
import { Comment } from '../Comment'

export function Post() {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar
            src="https://avatars.githubusercontent.com/u/49285794?v=4"
            hasBorder={true}
          />
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
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </Content>

      <Form>
        <Strong>Deixe seu feedback</Strong>

        <Textarea placeholder="Deixe um comentário" />

        <Button>
          <button type="submit">Publicar</button>
        </Button>
      </Form>

      <CommentList>
        <Comment />
        <Comment />
        <Comment />
      </CommentList>
    </Container>
  )
}
