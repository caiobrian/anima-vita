import styled from 'styled-components'
import utils from 'styles/utils'

export const Card = styled.div`
  display: flex;
  height: 400px;
  max-width: 140rem;
  width: 100%;
  padding: 40px;
  align-items: center;
  justify-content: space-between;

  ${utils.media.laptop} {
    flex-direction: column;
    gap: 16px;
    height: auto;
  }
`

export const CharacteresList = styled.div`
  display: flex;

  ${utils.media.mobile} {
    width: 100%;
    display: flex;
    gap: 16px;
    height: 400px;
    overflow: auto;
  }
`
