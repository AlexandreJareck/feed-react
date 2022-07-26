import { ImgHTMLAttributes } from 'react'
import { Container } from '.'

export type AvatarProps = {
  src: string
  hasBorder: boolean
} & ImgHTMLAttributes<HTMLHtmlElement>

export default function Avatar({
  src = 'https://avatars.githubusercontent.com/u/49285794?v=4',
  hasBorder = false
}: AvatarProps) {
  return <Container src={src} hasBorder={hasBorder} />
}
