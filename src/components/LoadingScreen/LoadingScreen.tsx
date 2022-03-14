import { Container } from './styles'

import { LoadingGif } from 'components/LoadingGif'

export const LoadingScreen = () => {
  return (
    <Container>
      <LoadingGif width="30rem" />
    </Container>
  )
}
