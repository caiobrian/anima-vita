import { AnimaLogo } from '../../assets/svg'
import { Image } from './styles'

export type LogoProps = {
  size: 'small' | 'medium' | 'large'
}

export const Logo = ({ size = 'medium' }: LogoProps) => (
  <Image src={AnimaLogo} alt="logo" size={size} />
)
