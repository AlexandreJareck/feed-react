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
import { author } from '../../data/author'
import { posts } from '../../data/post'
import Avatar from '../Avatar/Avatar.component'
import { Comment } from '../Comment'

export type PostProps = {
  author: typeof author
  content?: Pick<typeof posts[0], 'content'>
  publishedAt: string
}

export function Post({ author, publishedAt }: PostProps) {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar src={author.avatarUrl} hasBorder={true} />
          <AuthorInfo>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </AuthorInfo>
        </Author>
        <time title="11 de maio as oito e doze" dateTime={publishedAt}>
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
