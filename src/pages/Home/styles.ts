import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${colors.background};
`

export const AnimeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const LoadingGifContainer = styled.div`
  margin-bottom: 4rem;
`
