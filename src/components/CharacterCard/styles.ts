import styled from 'styled-components'
import colors from 'styles/colors'

type Props = {
  imageUrl: string
}

export const FlipCardInner = styled.div`
  position: relative;
  width: 20rem;
  height: 34rem;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const FlipCardContainer = styled.div`
  background-color: transparent;
  width: 22rem;
  height: 34rem;
  perspective: 100rem;
  padding: 0.4rem;
  border-radius: 1.6rem;
  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`

export const FlipCardPosition = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export const FlipCardFront = styled(FlipCardPosition)<Props>`
  background-color: ${colors.white};
  background-image: ${(props) => `url(${props.imageUrl})`};

  & > h2 {
    color: ${colors.text.darker};
    font-size: 1.8rem;
  }

  & > p {
    color: ${colors.text.darker};
    font-size: 1.4rem;
  }
`

export const FlipCardBack = styled(FlipCardPosition)`
  background-color: ${colors.white};
  transform: rotateY(180deg);
`

export const FlipCardBackContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 1rem;
`

export const FlipCardBackTitle = styled.h2`
  font-size: 1.8rem;
`

export const FlipCardBackAKA = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
`

export const FlipCardBackDescription = styled.p`
  font-size: 1.4rem;
  max-width: 20rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 6;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`
