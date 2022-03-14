import styled, { css } from 'styled-components'
import { LogoProps } from './Logo'

const handleSize = {
  small: css`
    width: 8rem;
  `,
  medium: css`
    width: 16rem;
  `,
  large: css`
    width: 32rem;
  `
}

const Image = styled.img<LogoProps>`
  ${({ size }) => handleSize[size]}
`

export { Image }
