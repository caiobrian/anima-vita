import styled from 'styled-components'
import { LoadingGifProps } from './LoadingGif'

export const Gif = styled.img<LoadingGifProps>`
  width: ${(props) => props.width};
`
