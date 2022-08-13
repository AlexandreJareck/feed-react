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
import Avatar from '../Avatar/Avatar.component'
import { Comment } from '../Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react'

type ContentType = {
  type: string
  content: string
}

export type PostProps = {
  author: typeof author
  content?: ContentType[]
  publishedAt: Date
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana'])

  const [newComment, setNewComment] = useState('')

  const pusblishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr }
  )

  const pusblishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  const ContentMap = useCallback(() => {
    return content?.map((line) => {
      if (line.type === 'paragraph') {
        return <p key={line.content}>{line.content}</p>
      }
      return (
        <p key={line.content}>
          <a href="#">{line.content}</a>
        </p>
      )
    }) as {} as JSX.Element
  }, [])

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')
  }

  function handleNewCommentChange({
    target
  }: ChangeEvent<HTMLTextAreaElement>) {
    if (target?.value) setNewComment(target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

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
        <time
          title={pusblishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {pusblishedDateRelativeToNow}
        </time>
      </Header>
      <Content>
        <ContentMap />
      </Content>

      <Form onSubmit={handleCreateNewComment}>
        <Strong>Deixe seu feedback</Strong>

        <Textarea
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
        />

        <Button>
          <button type="submit" disabled={newComment.length === 0}>
            Publicar
          </button>
        </Button>
      </Form>

      <CommentList>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </CommentList>
    </Container>
  )
}
