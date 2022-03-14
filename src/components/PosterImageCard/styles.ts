import styled from 'styled-components'
import colors from 'styles/colors'
import utils from 'styles/utils'

type Props = {
  imageUrl: string
}

export const CardImage = styled.img<Props>`
  position: absolute;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  top: -1px;
  width: 102%;
  height: 102%;
  filter: grayscale(80%) brightness(60%) blur(1px);
`

export const CardTitle = styled.h3`
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  z-index: 1;
  text-align: center;
  color: ${colors.text.title};
  text-overflow: none;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-text-stroke: 1px ${colors.text.darker};
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 40rem;
  width: 25rem;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  border: 1px solid black;
  outline: none;
  border-radius: 0.8rem;
  padding: 0 1.6rem;

  &:hover ${CardImage} {
    filter: grayscale(40%) brightness(80%);
  }

  &:hover ${CardTitle} {
    animation: text-animation 200ms linear;
    display: inherit;
  }

  @keyframes text-animation {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0px);
    }
  }

  ${utils.media.laptop} {
    height: 38rem;
    width: 100%;
  }

  ${utils.media.mobile} {
    height: 34rem;
    width: 100%;
  }
`

export const CardRating = styled.p`
  height: 3.4rem;
  width: 3.4rem;
  border-radius: 9.9rem;
  background-color: ${colors.rating};
  color: ${colors.text.rating};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  font-size: 1.6rem;
  font-weight: 700;
  position: absolute;
  top: 16px;
  right: 16px;
`
