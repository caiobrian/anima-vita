import AnimaLoading from 'assets/img/anima-loading.gif'
import { Gif } from './styles'

export type LoadingGifProps = {
  width: string
}

export const LoadingGif = ({ width }: LoadingGifProps) => (
  <Gif src={AnimaLoading} alt="Loading gif" width={width} />
)
